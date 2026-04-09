document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('nav');
    const homeSection = document.getElementById('home');
    
    const scrollHandler = () => {
        // 히어로 섹션 높이의 80% 지점에 도달하면 전환 (네비바 높이 고려)
        const threshold = (homeSection ? homeSection.offsetHeight : 100) - 80;
        if (window.scrollY > threshold) {
            navbar.classList.add('scrolled', 'shadow-sm');
        } else {
            navbar.classList.remove('scrolled', 'shadow-sm');
        }
    };
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', scrollHandler); // 창 크기 변경 시에도 대응


    // 3. Simple Counter Logic
    const startCounter = (el) => {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 1200; // From 2000ms to 1200ms
        const startTime = performance.now();
        
        const countStep = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentCount = Math.floor(progress * target);
            el.innerText = currentCount.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(countStep);
            } else {
                el.innerText = target.toLocaleString();
            }
        };
        requestAnimationFrame(countStep);
    };

    // 4. Progress Bar Animation
    const startProgress = (el) => {
        const targetWidth = el.getAttribute('data-width');
        el.style.width = targetWidth;
        
        // Animate percentage text
        const skillItem = el.closest('.skill-item');
        if (!skillItem) return;
        const percentEl = skillItem.querySelector('.percent');
        const targetPercent = parseInt(percentEl.getAttribute('data-target'));
        
        let current = 0;
        const duration = 1000; // From 1500ms to 1000ms
        const startTime = performance.now();

        const updatePercent = (currentTime) => {
            if (!el.classList.contains('animated')) return; // 중단 체크
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const val = Math.floor(progress * targetPercent);
            percentEl.innerText = `${val}%`;
            
            if (progress < 1) {
                requestAnimationFrame(updatePercent);
            } else {
                percentEl.innerText = `${targetPercent}%`;
            }
        };
        requestAnimationFrame(updatePercent);
    };

    // 5. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.15, // 15%만 보여도 즉시 애니메이션 시작 (더 빠른 반응성)
        rootMargin: '0px 0px -10% 0px' 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // --- 추가된 부분: 네비게이션 링크 활성화 핸들러 ---
                const id = entry.target.getAttribute('id');
                if (id) {
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
                    });
                }
                // ---------------------------------------------

                // Counters
                const counters = entry.target.querySelectorAll('[data-count]');
                counters.forEach(c => {
                    if (!c.classList.contains('counted')) {
                        c.classList.add('counted');
                        startCounter(c);
                    }
                });

                // Progress bars
                const progresses = entry.target.querySelectorAll('.progress-bar-fill');
                progresses.forEach(p => {
                    if (!p.classList.contains('animated')) {
                        p.classList.add('animated');
                        startProgress(p);
                    }
                });
            } else {
                // 화면에서 나가면 상태 초기화 (다시 들어올 때 애니메이션 실행을 위해)
                entry.target.classList.remove('active');
                
                const counters = entry.target.querySelectorAll('[data-count]');
                counters.forEach(c => {
                    c.classList.remove('counted');
                    c.innerText = '0';
                });

                const progresses = entry.target.querySelectorAll('.progress-bar-fill');
                progresses.forEach(p => {
                    p.classList.remove('animated');
                    p.style.width = '0%';
                });
            }
        });
    }, observerOptions);

    // Register all sections and animated components
    const animatedElements = document.querySelectorAll('.hero-section, section, .counter-section, .skill-card');
    animatedElements.forEach(el => {
        el.classList.add('animate-ready');
        observer.observe(el);
    });

    // Initial check for any items already in view
    scrollHandler();

    // 6. Contact Form Implementation (Formspree)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            // Show loading state
            btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> 전송 중...';
            btn.disabled = true;
            
            const formData = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.getAttribute('action'), {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('감사합니다! 메시지가 성공적으로 전송되었습니다. 확인 후 곧 연락드리겠습니다.');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        alert(data.errors.map(error => error.message).join(", "));
                    } else {
                        alert('메시지 전송에 실패했습니다. Formspree ID가 설정되었는지 확인해 주세요.');
                    }
                }
            } catch (error) {
                alert('메시지 전송 중 네트워크 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
            } finally {
                btn.innerHTML = originalText;
                btn.disabled = false;
            }
        });
    }
});
