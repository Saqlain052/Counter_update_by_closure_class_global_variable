1- Closure 

sb say pehlay hum nay aik function bnaya phir uss k andar 2 inner function bnaye aik increment ka and aik reset ka 
increment mei count++ krwa kr count print krwa dia and reset mei count ko wapis zero kr dia
outer function mei hum nay count ko zero hi rakha 
phir outerFunction ko aik variable mei store krwa kr increment ko call kia phir reset ko
iss trha 2 inner function apnay outer function ki properties ko use krtay rhy

2- Global Variable

sb say pehlay hum nay function k bahar aik variable bnaya jissay global variable kehtay hein
phir hum nay uss variable ko function k andar use kia
kyun k global variable function k bahar bnaya jata h iss liye uss ko program mei different functions k andar bhi access kia ja skta h
iss trha aik hi variable ko multiple functions use kr saktay hein

3- Class Properties

sb say pehlay hum nay aik class bnayi aur uss k andar constructor bnaya
constructor mei hum nay this.count = 0 kr k count ko class ki property bana dia
phir increment method mei this.count++ krwa kr count ko increase kia aur reset method mei this.count = 0 kr k count ko wapis zero kr dia
phir class ka object bana kr increment aur reset methods ko call kia
iss trha this.count object ki property hoti h aur class k different methods uss property ko use aur update krtay rehtay hein

Safety

Closure:
closure mei variable directly bahar say access nahi hota, kyun k variable outer function k andar hota h. 
Sirf inner functions uss variable ko access aur change kr saktay hein, is liye ye zyada safe hota h.

Global Variable:
global variable function k bahar hota h, is liye program k different parts mei directly access aur change kia ja skta h. 
Iss wajah say ye kam safe hota h.

Class Properties:
class property ko this.count k through object k methods access krte hein. 
Ye global variable k muqablay mei zyada organized aur safe hota h, lekin property ko directly object k through bhi access kia ja skta h to yei b closure say km safe h .
