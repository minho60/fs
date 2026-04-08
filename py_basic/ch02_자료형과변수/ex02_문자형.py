# 문자열을 만드는 방법
print("Hello")
print('Hello')
print('''Life is too short, You need python''')

#문자열 연산
head = "python"
tail = "monty"
# 문자열 연결 (문자열 끼리만)
print(head+tail)

#문자열 반복
print(head*2)

#문자열 길이(Length):Len()
a = "Life is too short, You need python"
print(len(a)) # 34

# 문자열 인덱싱과 슬라이싱
# 인덱싱? ~을 가르킨다.
a = "Monty Python and the Holy Grail"
print(a[3])
print(a[0])
print(a[-0])
print(a[12])
print(a[-1])
print(a[-2])
print(a[-3])

# 슬라이싱
print(a[0:4])
print(a[0:5])
print(a[0:2])
print(a[5:7])
print(a[12:17])

print("--------------")
print(a[19:]) # 19 번부터 끝까지 
print(a[:17]) # 0부터 17이전 
print(a[:]) # 모두 출력

#슬라이싱으로 문자열 나누기
a = "20260406lucidity"
date = a[:8]
weather = a[8:]
print(date)
print(weather)

a= "20260407sunny"
year = a[:4]
day = a[4:8]
weather = a[8:]
print(year+"년")
print(day+"일")
print(weather+"날씨")

# 문자열 대체
a = "pithon" 
print(a[1]) # i

#에러
# a[1] = 'y'
# print(a) 

print(a[:1]+'y'+a[2:])

# 문자열 포맷팅
'''
%d  숫자(digit)
%f  실수(float)
%s  문자열(string)
'''
print("I eat %d apples." % 3)
print("I eat %s apples." % "three")

number = 3
print("I eat %s apples." % number)

# 두개 이상의 값을 넣으려면?
day= "three"
print("I eat %d apples. so i was sick for %s days" % (number, day))

# 특수문자 %로 지정하려면? %%
print("error is %f%%." % 3.5)

#포멧 코드와 숫자 함께 사용하기
print("0123456789")
print("%10s" % "hi")
print("%-10sjane." % "hi")

#소수점 표현
print("%0.4f" % 3.141542) #소수점이하 4자리까지 표시(반올림)
print("%10.4f" % 3.141542)

### v2.6 format() 함수
print("I eat {0} apples".format(3))
print("I eat {0} apples".format("five"))

number=3
day="five"
print("I eat {0} apples".format(number))
print("I eat {0} apples. so i was sick for{1}days".format(number,day))

#이름으로 넣기 
print("I eat {number} apples. so i was sick for{day}days".format(number=3,day="five"))
print("I eat {0} apples. so i was sick for{day}days".format(3,day="five"))

#정렬
print("{0}".format("hi"))

# 특수 문자{} 표시하기
print("{{and}}".format()) #{and}


###v3.6+ f문자열 포맷팅
name ="홍길동"
age = 30
print('나의 이름은 {name}입니다. 나이는 {age}입니다.'.format(name='길동', age=25))
print(f'나의 이름은{name}입니다. 나이는{age}입니다.')

print(f'나는 내년이면 {age+1}살이 된다.')


###딕셔너리
d = {'name':'홍길동','age':30}
print(d)
print(f'나ㅇ의 이름은 {d["name"]}입니다. 나이는 {d["age"]}입니다.')

# 정렬
print(f'{"hi":=^10}')
print(f'{"hi":=^10}')

#{}표시
print(f'{{and}}')

#천단위 표시
print(f"난 {1500000:,}원이 필요해!")




