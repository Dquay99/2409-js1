```jsx
1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
x = true, y = true, z = false

x && y && z → false ( Toán tử && yêu cầu tất cả các vế phải là true, nhưng z là false nên kết quả cuối cùng là false)
x && y && !z → true ( Phủ định của z là false sẽ thành true )
(x && y) || z → true ( Chỉ cần một vế của toán tử || là true thì kết quả sẽ là true)
(x && y) || !z → true ( x && y là true, và !z cũng là true, vì vậy true || true sẽ trả về true. )
x && (y || z) → true ( y || z sẽ là True vì y là True. x && True sẽ trả về True)
x && !(y || z) → false ( y || z là True (do y là True), !(y || z) sẽ là False. Vì vậy x && False sẽ trả về False)
x && (y || !z) → true ( !z là True, vì vậy y || !z sẽ là True, và x && True trả về True )
x && (!y || z) → false ( !y là False, False || z sẽ là False (vì cả hai vế đều là False). Do đó, x && False sẽ trả về False)

2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
name = 'AAA', age = 20, isGood = true

age + 10 = 30 ( Biến age là số nguyên 20,khi cộng thêm 10 kết quả là 30)
age % 3 = 2 ( Đây là phép chia lấy dư (%). Khi 20 chia cho 3, phần dư là 2, vì vậy kết quả của phép toán là 2)
name + ' BBB' = "AAA BBB" ( Biến name là chuỗi "AAA", khi cộng với chuỗi " BBB", phép nối chuỗi (+) sẽ ghép hai chuỗi lại với nhau, tạo thành chuỗi mới "AAA BBB")
!isGood = false ( Biến isGood có giá trị là True, khi phủ định (not) giá trị này, kết quả là False)
name == 'aaa' && age >= 20 → false (So sánh chuỗi name == 'aaa' sẽ trả về False vì "AAA" khác "aaa" (chuỗi có phân biệt chữ hoa/chữ thường) . Dù age >= 20 là True, nhưng vì toán tử && yêu cầu cả hai điều kiện đều phải là True, nên kết quả của phép toán này là False  )
name != 'aaa' && isGood → true ( name != 'aaa' là True (vì "AAA" khác "aaa") và isGood là True, vì vậy True && True sẽ trả về True )
!(age < 10) && !isGood → false ( age < 10 là False vì age = 20, do đó !(age < 10) sẽ là True và !isGood là False, vì vậy True && False sẽ trả về False)

3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
a = 10, b = 20, c = 30, d = '40'

a + b + c = 60 ( Khi cộng các số nguyên lại với nhau, kết quả là 10 + 20 + 30 = 60)
a - b / c = 9.333 ( Đầu tiên, tính b / c = 20 / 30 = 0.6667. Sau đó, a - 0.6667 = 10 - 0.6667 = 9.333)
a - (b * c) = -590 ( Tính b * c = 20 * 30 = 600. Sau đó, a - 600 = 10 - 600 = -590 )
d - (a * b) - c =  null ( Biến d có kiểu dữ liệu là chuỗi '40' nên không thể thực hiện phép trừ giữa chuỗi và số nguyên)
a + b + c + d = null ( không thể cộng chuỗi và số nguyên)
d + a + b + c = null ( lỗi tương tự như trên ) 
d + a - b + c = null ( lỗi tương tự như trên ) 
a - b + d - c = null ( lỗi tương tự như trên ) 
d - c + a - b = null ( lỗi tương tự như trên ) 
a * b + d * c = null ( lỗi tương tự như trên ) 

4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
x = true, y = false, z = 10

x && y → false 
x && !y → true 
x && z == 10 → true
(x && z == 10) → true
!(x && z == 10) → false
!(x && z == 50) → true
x && y && z == 10 → false
x && !y && z == 10 → true
x || y || z == 10 → true
(x && y) || z != 10 → false
!(x && z == 10) || y → false

5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
a = 1, b = '2', c = 3, d = '4'

b + d = "24" 
a + b + c + d = null ( không thể cộng chuỗi với số nguyên ) 
a - b + c - d = null ( không thể cộng chuỗi với số nguyên )  
a - b - c + d = null ( không thể cộng chuỗi với số nguyên ) 
(b + d) - (a + c) = null ( không thể cộng chuỗi với số nguyên )  
(a + b) - (c + d) = null ( không thể cộng chuỗi với số nguyên )  
a * c + b * d = null ( không thể cộng chuỗi với số nguyên ) 
-b + d = null ( không thể dùng phép (-) với chuỗi )  
-b - d = null ( không thể dùng phép (-) với chuỗi )   
-(b + d) = null ( không thể dùng phép (-) với chuỗi )   

6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
age = 25, isMarried = false, isRich = true

age > 25 && isMarried && isRich → false ( do điều kiện age>25 là false và toán tử && yêu cầu cả 3 điều kiện đều là true nên kết quả là false)
(age <= 25 || isMarried) && isRich → true
(age > 10 || isRich) && isMarried → false
!(age >= 15 && isMarried) && isRich → true
!(age <= 20) || !(isMarried && isRich) → true
(age > 8 && !isMarried) || isRich → true
!(age < 8 && !isMarried) || isRich → true
(age == 8 && isMarried) || !isRich → false

7 Hãy cho biết kết quả phép toán và biểu thức
a = 11, b = '22', c = 33

a + b = null ( không thể cộng chuỗi với số nguyên)
a - c = -22
a + b + c = null 
a + c + b = null
(a + b) % 3 = nill
a * b > 50 → null
a ** b > 100 → null
a - (b++) == 5 → null
a - (++b) == 5 → null

8. Cho các biến sau: 
isTall = true, isMuscle = false, isHandsome = true
Hãy cho biết kết quả của các biểu thức sau:

isTall && isMuscle → false
!isHandsome → false
!isTall || !isMuscle → true
isTall || !(isMuscle && isHandsome) → true
isMuscle && !(isTall || isHandsome) → false
```