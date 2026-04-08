# 문자열 내장함수
#count('문자열'): 문자열의 개수
a = "hobby"
print(a.count('b')) # 2

# find('문자열'): 문자열의 위치 
a = "python is the best choice"
print(a.find('b')) # 14

#index()
a = "Life is too short"
print(a.index('t')) # 8

# join()
print(",".join('abcd'))

# upper(): 대문자로 
a = 'Hi'
print(a.upper())
# lower():소문자
print(a.lower())


# 공백제거
a=" hi "
# lstrip()
print(a.lstrip())
#rstrip()
print(a.rstrip())
#strip()
print(a.strip())

a = "  hello  "
ls=a.lstrip()
print(ls)

# replace()
a = "Life is too short"
print(a.replace("Life","Your Leg"))

# split(['구분자']) 
# 구분자 기본값은 공백, 리스트로 출력된다
a = "Life is too short"
print(a.split()) #['Life', 'is', 'too', 'short']-> 리스트
b= "a,b,c,d"
print(b.split(",")) # ['a','b','c','d']

# 논리값 출력 함수
# 형태: isxxx()
# isalpha(): 공백 특수문자등 허용 안함
a = "python"
print(a.isalpha()) # true
a ="python3"
print(a.isalpha()) # false
a="hi python"
print(a.isalpha()) # false

#isdigit()
a ="12345"
print(a.isdigit()) #true
a ="12삼45"
print(a.isdigit()) #false
a ="12 45"
print(a.isdigit()) #false

a="Life is too short"
# startswith('문자열'):
# 문자열로 시작하면 true, 아니면 false(대소문자 구별!)
print(a.startswith("Life i")) # true
# endswith()
print(a.endswith("short")) # true