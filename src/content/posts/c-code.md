---
title: c-code
published: 2025-10-15
description: 'C language code examples'
image: ''
tags: ['C', 'Programming']
category: 'Coding'
draft: false 
lang: ''
---
Of course, here are your C language files organized into a structured Markdown notebook. The code snippets have been categorized based on the primary programming concepts they demonstrate.

# C Language Programming Notebook

This document contains a collection of C code examples, categorized by programming concepts, ranging from basic I/O to more complex topics like functions, arrays, and pointers.

---

## 1. Basic I/O & Data Types

Examples focusing on fundamental input/output operations and basic data type manipulations.

### 1.1. Sum of Character ASCII Values
This program reads three characters from the input, converts them to their integer ASCII values, and prints the sum.

*Source File: `Main (1).c`*
```c
#include<stdio.h>

int main(){
 char a,b,c;
 scanf("%c%c%c",&a,&b,&c);
 int as_a = a;
 int as_b = b;
 int as_c = c;
 int x = as_a+as_b+as_c ;

 printf("%d",x);
    return 0;
}
```

### 1.2. Formatted Date Parsing
This code reads a date in `YYYY-MM-DD` format and prints the year, month, and day on separate lines.

*Source File: `Main (2).c`*
```c
#include<stdio.h>

int main(){
    int y,m,d;
    scanf("%d-%d-%d",&y,&m,&d);
    printf("%d年\n%d月\n%d日\n",y,m,d);
    return 0;
}
```

### 1.3. Uppercase to Lowercase Conversion
This program reads an uppercase character and converts it to its corresponding lowercase character by adding 32 to its ASCII value.

*Source File: `Main (3).c`*
```c
#include<stdio.h>

int main() {
    char x;
    scanf("%c",&x);
    char n = x + 32;
    printf("%c",n);
    return 0;
}
```

---

## 2. Conditional Logic (if-else, switch)

Code that uses conditional statements to control the program flow.

### 2.1. Piecewise Function Calculation
Calculates the value of a function `f(x)` which has different definitions based on whether `x` is greater than or equal to zero.

*Source File: `Main (4).c`*
```c
#include <stdio.h>
#include<math.h>

void compute(float *x);

int main() {
    float x;
    float y;
    scanf("%f",&x);
    if (x>=0) {
        y=sqrt(x);
    }
    else {
        y=(x+1)*(x+1)+2*x+1/x;
    }
    printf("f(x)=%.2f\n",y);
}
```

### 2.2. Odd/Even Number Transformation
Reads an integer. If the number is odd, it doubles it. If it's even, it halves it.

*Source File: `Main (5).c`*
```c
#include <stdio.h>
#include<math.h>

int main() {
    int x;
    int y;
    scanf("%d",&x);
    if (x % 2 !=0) {
        y = x*2;
    }
    else {
        y=x/2;
    }
    printf("%d\n",y);
}
```

### 2.3. IP Address Validator
Reads four integers representing an IP address and checks if each part is within the valid range of 0 to 255.

*Source File: `Main (6).c`*
```c
#include <stdio.h>
#include<math.h>

int main() {
    int a,b,c,d;

    scanf("%d.%d.%d.%d",&a,&b,&c,&d);
    if ((a>= 0 &&a<= 255)&&(b>= 0 &&b<= 255)&&(c>= 0 &&c<= 255)&&(d>= 0 &&d<= 255)) {
        printf("有效");
    }
    else {
        printf("无效");
    }
    return 0;
}
```

### 2.4. Greeting Selector (switch-case)
Displays a different greeting based on the integer input (1 for morning, 2 for afternoon, 3 for night).

*Source File: `Main (7).c`*
```c
#include <stdio.h>

int main() {
    int x;
    scanf("%d",&x);
    switch (x) {
        case 1: {
            printf("Good morning!");
            break;
        }
        case 2: {
            printf("Good afternoon!");
            break;
        }
        case 3: {
            printf("Good night!");
            break;
        }
        default:printf("input error!");
    }
    return 0;
}
```

### 2.5. Character Type Identifier
Identifies whether the input character is an uppercase letter, lowercase letter, numeric character, or another type of character.

*Source File: `Main (8).c`*
```c
#include <stdio.h>

int main() {
    char ch;
    ch = getchar();
    
    if (ch >= 'A' && ch <= 'Z') {
        printf("It's a uppercase letter.");
    } else if (ch >= 'a' && ch <= 'z') {
        printf("It's a lowercase letter.");
    } else if (ch >= '0' && ch <= '9') {
        printf("It's a numeric character.");
    } else {
        printf("It's a other character.");
    }
    
    return 0;
}
```

### 2.6. Simple Calculator
Performs addition, subtraction, multiplication, or division based on the operator character entered between two numbers. Includes error handling for division by zero.

*Source File: `Main (9).c`*
```c
#include<stdio.h>

int main() {
    float a,b,x;
    char c;
    scanf("%f%c%f",&a,&c,&b);
    if(c=='+') {
        x=a+b;
        printf("%.2f%c%.2f=%.2f",a,c,b,x);
    }
    else if(c=='-') {
        x=a-b;
        printf("%.2f%c%.2f=%.2f",a,c,b,x);
    }
    else if(c=='*') {
        x=a*b;
        printf("%.2f%c%.2f=%.2f",a,c,b,x);
    }
    else if(c=='/' && b!=0) {
        x=a/b;
        printf("%.2f%c%.2f=%.2f",a,c,b,x);
    }
    else if(c=='/' && b == 0) {
        printf("input error!");
    }
    else {
        printf("input error!");
    }
    return 0;
}
```

### 2.7. Tiered Electricity Bill Calculator
Calculates an electricity bill based on a tiered rate system. The cost per unit increases as consumption crosses certain thresholds.

*Source File: `Main (11).c`*
```c
#include<stdio.h>

int main(){
    int x;
    float m = 0;
    scanf("%d",&x);
    if (x >= 0 && x <= 200){
        m = x*0.5;
        printf("charge:%.2f",m);
    }
    else if (x >= 201 && x <= 400){
        m = 100+(x-200)*0.65;
        printf("charge:%.2f",m);
    }
    else if (x >= 401 && x <= 600){
        m = 230+(x-400)*0.8;
        printf("charge:%.2f",m);
    }
    else if (x >= 601){
        m = 390+(x-600)*1.0;
        printf("charge:%.2f",m);
    }
    else if (x<0){
        printf("input error!");
    }
    return 0;
}
```

---

## 3. Loops (for, while)

Programs that utilize loops for repetition, iteration, and pattern generation.

### 3.1. Integer Reversal
This program reads an integer and prints its digits in reverse order.

*Source File: `Main.c`*
```c
#include<stdio.h>

int main(){
    int num;
    int temp;
    int rev = 0;
    scanf("%d",&num);
    while(num !=0){
        temp = num % 10;
        num = num / 10;
        rev = rev * 10 + temp;
    }
    printf("%d",rev);
    return 0;
}
```

### 3.2. Fibonacci Sequence Generator
Generates and prints the first `n` numbers of the Fibonacci sequence.

*Source File: `Main (14).c`*
```c
#include<stdio.h>

int main() {
	int i = 1;
	int j = 1;
	int sum = 1;
	int n;
	scanf("%d", &n);
	if (n >= 1) {
		printf("%d", i);
	}
	if (n >= 2) {
		printf("% d", j);
	}
	for (int m = 3; m <= n; m++) {
		sum = j + i;
		printf(" %d", sum);
		i = j;
		j = sum;
	}
	return 0;
}
```

### 3.3. Parallelogram of Stars
Uses nested loops to print a parallelogram of stars with `n` rows and `m` columns.

*Source File: `Main (17).c`*
```c
#include <stdio.h>
int main() {
    int n,m;
    scanf("%d%d", &n,&m);

    for(int i = 0; i < n; i++) {  // 控制行数
        // 打印空格
        for(int j = 0; j < n - i - 1; j++) {
            printf(" ");
        }
        // 打印星号
        for(int k = 0; k < m; k++) {
            printf("*");
        }
        printf("\n");  // 换行
    }
    return 0;
}
```

### 3.4. Nested Loops for Combinations (Coin Problem)
Uses three nested loops to find all possible combinations of 10, 5, and 1 unit coins that sum up to a given amount of money.

*Source File: `Main (20).c`*
```c
#include<stdio.h>

int main(){
    float money;
    scanf("%f",&money);
    for(int a = 0 ; a <=3;a++){
        for(int b = 0; b<= 6;b++){
            for(int c = 0; c<=30;c++){
                if(a*10 + b*5 + c*1 == 10*money){
                    printf("(%d,%d,%d)\n",a,b,c);
                }
            }
        }
    }
    return 0;
}
```

### 3.5. Nested Loops for Permutations
Generates all unique 3-digit numbers that can be formed using the digits `n`, `n+1`, `n+2`, and `n+3`.

*Source File: `Main (22).c`*
```c
#include<stdio.h>

int main(){
    int n;
    int count = 0;
    scanf("%d",&n);
    for(int a = n; a<=n+3;a++){
        for(int b = n; b<=n+3;b++){
            for(int c = n; c<=n+3;c++){
                if(a != b && a != c && b != c){
                printf("%d%d%d ",a,b,c);
                count++;
                }
            }
        }
    }
    printf("\ncount=%d",count);
    return 0;
}
```

### 3.6. Nested Loops for Equation Solver
Finds integer solutions (between 1 and 20) for the linear equation `ax + by + cz = 20`.

*Source File: `Main (23).c`*
```c
#include<stdio.h>

int main(){
    int a,b,c;
    scanf("%d%d%d",&a,&b,&c);
    for(int x = 1; x<=20;x++){
        for(int y = 1; y<=20;y++){
            for(int z = 1; z<=20;z++){
                if(a*x+b*y+c*z == 20){
                printf("x,y,z: %d,%d,%d\n",x,y,z);
                }
            }
        }
    }
    return 0;
}
```

---

## 4. Mathematical Algorithms

Implementations of various mathematical calculations and series.

### 4.1. Sum of a Fraction Series
Calculates the sum of the first `n` terms of the series: 1/2 + 2/3 + 3/5 + 5/8 + ...

*Source File: `Main (10).c`*
```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    if (n <= 0) {
        printf("input error!\n");
        return 0;
    }

    float sum = 0.0f;
    int numerator = 1, denominator = 2;

    for (int i = 0; i < n; i++) {
        sum += (float)numerator / denominator;
        
        // 更新分子和分母
        int next_numerator = denominator;
        int next_denominator = numerator + denominator;
        
        numerator = next_numerator;
        denominator = next_denominator;
    }

    printf("sum=%.2f\n", sum);
    return 0;
}
```

### 4.2. Approximation of 'e'
Approximates the value of the mathematical constant 'e' by summing the first `n` terms of the series: 1 + 1/1! + 1/2! + 1/3! + ...

*Source File: `Main (12).c`*
```c
#include <stdio.h>

int main() {
    int n;
    scanf("%d", &n);

    if (n <= 0) {
        printf("input error!\n");
        return 0;
    }

    double e = 1.0;     // 初始值为1
    double factorial = 1.0; // 用于计算阶乘

    for (int i = 1; i < n; i++) {
        factorial *= i;            // 计算i的阶乘
        e += 1.0 / factorial;     // 加上当前项
    }

    printf("%.12lf\n", e);
    return 0;
}
```

### 4.3. GCD & LCM
Calculates the Greatest Common Divisor (GCD) and Least Common Multiple (LCM) of two integers using the Euclidean algorithm.

*Source File: `Main (13).c`*
```c
#include <stdio.h>

int main() {
    int m, n;
    scanf("%d %d", &m, &n);

    // 计算 GCD（辗转相除法）
    int a = m, b = n;
    
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    int gcd = a;

    // 计算 LCM
    int lcm = (m / gcd) * n;  // 防止 m * n 溢出

    // 输出结果
    printf("the greatest common divisor:%d\n", gcd);
    printf("the minimum common multiple:%d\n", lcm);

    return 0;
}
```

### 4.4. Sum of `a + aa + aaa + ...` Series
Calculates the sum of the series `a + aa + aaa + ...` for `n` terms. For example, if a=2 and n=3, it calculates 2 + 22 + 222.

*Source File: `Main (18).c`*
```c
#include <stdio.h>

int main() {
    int a, n;
    long long sum = 0;
    long long term = 0;

    scanf("%d %d", &a, &n);

    for (int i = 0; i < n; i++) {
        term = term * 10 + a;
        sum += term;
    }

    printf("%lld\n", sum);

    return 0;
}
```

### 4.5. Harmonic and Alternating Series Sum
For three given integer inputs (`n`), this code calculates the sum of the harmonic series (1 + 1/2 + 1/3 + ... + 1/n) and the alternating harmonic series (1 - 1/2 + 1/3 - ...).

*Source File: `Main (19).c`*
```c
#include <stdio.h>

int main() {
    int n_values[3];
    float x_sums[3];
    float y_sums[3];
    int i, j;

    scanf("%d %d %d", &n_values[0], &n_values[1], &n_values[2]);

    for (j = 0; j < 3; j++) {
        int n = n_values[j];
        float current_x_sum = 0.0L;
        float current_y_sum = 0.0L;

        for (i = 1; i <= n; i++) {
            float term = 1.0L / (float)i;
            current_x_sum += term;
            if (i % 2 == 1) {
                current_y_sum += term;
            } else {
                current_y_sum -= term;
            }
        }
        x_sums[j] = current_x_sum;
        y_sums[j] = current_y_sum;
    }

    printf("x序列的和分别为：%.5f %.5f %.5f\n", x_sums[0], x_sums[1], x_sums[2]);
    printf("y序列的和分别为：%.5f %.5f %.5f\n", y_sums[0], y_sums[1], y_sums[2]);

    return 0;
}
```

---

## 5. Arrays

Examples involving data storage and manipulation using one-dimensional and two-dimensional arrays.

### 5.1. One-Dimensional Arrays

#### 5.1.1. Replace Negative Numbers with Zero
Reads `n` integers into an array and replaces any negative numbers with 0 before printing the result.

*Source File: `Main.cpp`*
```c
#include <stdio.h>
int main()
{
    int n,i;
    scanf("%d",&n);
    int a[n];

    for(i=0;i<n;i++)
    {
        int *p = &a[i];
        scanf("%d", p);

        if(*p<0) {
            *p=0;
        } 
        a[i]=*p;
    }

    for(int j=0;j<n;j++) {
        printf("%d ", a[j]);
    }
    return 0;
}
```

#### 5.1.2. Array Reversal
Reverses the elements of a 10-element integer array in-place.

*Source File: `main (21).c`*
```c
#include <stdio.h>
int main()
{
   int a[10]={0};
   int x;
   int temp = 0;
   int i;
   for(int i = 0;i<10;i++){
       scanf("%d",&x);
       a[i]=x;
   }
   for(int j = 0;j<5;j++){
       temp=a[j];
       a[j]=a[9-j];
       a[9-j]=temp;
   }
   for(i = 0; i<10; i++)
        printf("%d ", a[i]);
    return 0;
}
```

#### 5.1.3. Deleting an Element from an Array
Searches for a number in a pre-defined array. If found, it removes the first occurrence by shifting subsequent elements to the left.

*Source File: `Main (24).c`*
```c
#include<stdio.h>

int main() {
    int arr[10] ={12,45,87,64,15,-47,69,16,63,36};
    int num;
    int pin = 0;
    scanf("%d",&num);
    for(int i =0;i<10;i++){
        if(arr[i]==num){
            pin = 1;
            for(int j = i;j<9;j++){
                arr[j]=arr[j+1];
            }
        }
    }
    if(pin == 1){
        for (int i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");}
    else{
        printf("Not Found!");
    }
    return 0;
}
```

#### 5.1.4. Inserting an Element into a Sorted Array
Inserts a number into a pre-defined sorted array and then re-sorts the array to maintain ascending order using a bubble sort.

*Source File: `main (25).c`*
```c
#include <stdio.h>
int main()
{
    int a[10]={2,5,6,8,11,15,17,20,25};
    int x;
    int i=0;
    int temp = 0;
    int n = 10;
    int m = 0;
    scanf("%d",&m);
    a[9]=m;
    for(x = 0;x<10;x++){
        for (int y = 0 ; y< 9 - x;y++){
        if(a[y]>a[y+1]){
            temp = a[y];
            a[y]=a[y+1];
            a[y+1]=temp;
        }
    }
    }

   for(i = 0; i<n; i++)
        printf("%d ", a[i]);
    return 0;
}
```

#### 5.1.5. Finding the Most Frequent Element
Finds the number that appears most frequently in an array of 12 integers and prints the number and its frequency.

*Source File: `Main (27).c`*
```c
#include <stdio.h>

int main() {
    int a[12];
	int current_count = 0;
	int max_times =0;
	int most_number=0;
	for (int i = 0; i < 12; i++) {
		scanf("%d", &a[i]);
	}
	for(int i = 0;i<12;i++){
		current_count = 0;
		for(int j =0;j<=12;j++){
			if(a[j]==a[i]){
				current_count++;
			}
		}
		if(current_count > max_times){
			max_times = current_count;
			most_number = a[i];
		}
	}
	
	printf("num: %d, times=%d\n", most_number, max_times);
}
```

#### 5.1.6. Partitioning an Array
Rearranges an array such that all elements less than a given number `n` come first, followed by elements equal to `n`, and finally elements greater than `n`.

*Source File: `main (30).c`*```c
#include <stdio.h>
int main()
{
int a[10] = {3,6,1,0,5,2,7,8,3,4};
int n, i;
int flag = 0;
int result[10];

    scanf("%d", &n);
    
    for(i = 0; i < 10; i++) {
        if(a[i] == n) {
            flag = 1;
            break;
        }
    }
    
    if(flag) {
        int left = 0;
        
        for(i = 0; i < 10; i++) {
            if(a[i] < n) {
                result[left++] = a[i];
            }
        }
        
        for(i = 0; i < 10; i++) {
            if(a[i] == n) {
                result[left++] = a[i];
            }
        }
        
        for(i = 0; i < 10; i++) {
            if(a[i] > n) {
                result[left++] = a[i];
            }
        }
        
        for(i = 0; i < 10; i++) {
            a[i] = result[i];
        }
    }
if(flag)
for(i = 0; i<10; i++)
printf("%d ", a[i]);
else
printf("Wrong number!");
return 0;
}
```

### 5.2. Two-Dimensional Arrays

#### 5.2.1. Finding Maximum Value per Column
Reads a 3x4 matrix and finds the maximum value in each of its four columns.

*Source File: `Main (26).c`*
```c
#include <stdio.h>

int main() {
    int arr[3][4];
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            scanf("%d", &arr[i][j]);
        }
    }
    for (int j = 0; j < 4; j++) {
        int max = arr[0][j];
        for (int i = 0; i < 3; i++) {
            if (max < arr[i][j]) {
                max = arr[i][j];
            }
        }
        printf("max[%d]=%d\n",j,max);
    }
}
```

#### 5.2.2. Finding Maximum Value per Row
Reads a 4x4 matrix and finds the maximum value in each of its four rows.

*Source File: `Main (47).c`*
```c
#include<stdio.h>

int main() {
    int a[4][4] = {0};
    for (int i = 0;i<4;i++) {
        for (int j = 0;j<4;j++) {
            scanf("%d",&a[i][j]);
        }
    }
    int max[4]={0}; // Corrected size from 3 to 4
    for (int i = 0;i<4;i++) {
        for (int j = 0;j<4;j++) {
            if (max[i] < a[i][j]) {
                max[i] = a[i][j];
            }
        }
    }
    for (int i = 0;i<4;i++) {
        printf("%d\n",max[i]);
    }
    return 0;
}
```

---

## 6. Strings

Code for manipulating character arrays (strings).

### 6.1. Extracting Date from ID Number
Reads an 18-digit ID card number as a string and extracts the year and month of birth.

*Source File: `Main (28).c`*
```c
#include <stdio.h>
#include <string.h>

int main() {
    char id_card[19];
    int year, month;

    scanf("%s", id_card);

    if (strlen(id_card) == 18) {
        sscanf(id_card, "%*6s%4d%2d", &year, &month);
        printf("%d-%d\n", year, month);
    } else {
        printf("input error\n");
    }
    return 0;
}
```

### 6.2. Sorting an Array of Strings
Reads four strings and sorts them in alphabetical order using a bubble sort algorithm.

*Source File: `Main (29).c`*
```c
#include<stdio.h>
#include<string.h>

int main(){
    char names[4][200];
    char temp[200];

    for(int i=0;i<4;i++){
        scanf("%s",names[i]);
    }
    for(int i=0;i<3;i++){
        for(int j = 0 ;j<3-i;j++){
            if(strcmp(names[j],names[j+1]) >0){
                strcpy(temp,names[j]);
                strcpy(names[j],names[j+1]);
                strcpy(names[j+1],temp);
            }
        }
    }

    for(int i=0;i<4;i++){
        printf("%s\n",names[i]);
    }
}
```

---

## 7. Functions

Examples that demonstrate breaking down problems into smaller, reusable pieces of code using functions.

### 7.1. Leap Year Checker
A function `fun(year)` that returns 1 if the given year is a leap year, and 0 otherwise.

*Source File: `main (31).c`*
```c
#include<stdio.h>
int fun(int n);
int main()
{
    int year , f ;
    scanf("%d",&year);
    f=fun(year);
    if(f==1)
         printf("yes");
    else
        printf("no");
}
int fun(int i) {
    int m;
    if ((i % 4 == 0 && i %100 != 0 )||  i % 400 == 0) {
        m = 1;
    }
    else {
        m = 0;
    }
    return m;
}
```

### 7.2. Printing a Star Pyramid
A function `prn(n)` that prints a pyramid of stars with `n` rows.

*Source File: `main (32).c`*
```c
#include<stdio.h>
void prn(int n);
int main()
{
   int a;
   scanf("%d",&a);
   prn(a);
   return 0;
 }
void prn(int n) {
    for (int i = 1; i <= n; i++) {
        for (int j = n; j > i; j--) {
            printf(" ");
        }
        for (int k = 1; k <= 2*i-1; k++) {
            if ((k & 1) == 1)
                printf("*");
            else
                printf(" ");
        }
        printf("\n");
    }
}
```

### 7.3. Prime Number Checker
A function `prm(n)` that checks if a number is prime. The main function then prints all prime numbers up to a given limit `m`.

*Source File: `main (33).c`*
```c
#include <stdio.h>

int prm(int n);
int main()
{
   int i,m;
   scanf("%d",&m);
   for(i=0;i<=m;i++)
   {
    if(prm(i)==1) printf("%d ",i);}
   return 0;
 }
int prm(int n) {
    int p = 1;
    if (n==0 || n ==1) {
        p=0;  
    }
    for (int j=2;j<n;j++) {
        if (n%j==0) {
            p=0;
            break;
        }
    }
    return p;
}
```

### 7.4. Finding Numbers with a Specific Divisor Sum
Finds all numbers `i` up to `m` where the sum of `i`'s proper divisors equals `n`.

*Source File: `Main (16).c`*
```c
#include<stdio.h>

int sushu(int m); // Note: Function name 'sushu' means 'prime', but it calculates sum of divisors.
int main() {
    int m,n;
    int count = 0;
    scanf("%d%d", &m,&n);

    for (int i = 1; i <= m; i++) {
        if (sushu(i)==n) {
            printf("%d ",i);
            count = 1;
        }
    }
    if (count == 0) {
        printf("no such numbers");
    }
}

int sushu(int m) {
    int sum=0;
    for (int j = 2; j < m;j++) {
        if (m % j == 0) {
            sum+=j;
        }
    }
    return sum;
}
```

### 7.5. Finding and Summing Factors
A function `fac(n)` that prints all factors of a number `n` and returns their sum.

*Source File: `main (35).c`*
```c
#include<stdio.h>
int fac(int n);
int main()
{
    int n;
    scanf("%d",&n);
    printf("因子：");
    printf("\n因子和：%d",fac(n));
    return 0;
}
int fac(int n) {
    int count=0;
    for (int i =1;i<=n;i++) {
        if (n%i == 0) {
            printf("%d ",i);
            count+=i;
        }
    }
    return count;
}
```

### 7.6. Integer Power Calculation
A function `powr(m, n)` that calculates `m` raised to the power of `n`.

*Source File: `main (36).c`*```c
#include<stdio.h>
#include<math.h>
double powr(int m,int n);
int main()
{
int m, n;
scanf("%d%d", &m, &n);
printf("%.0lf\n", powr(m,n));
return 0;
}
double powr(int m,int n) {
int answer=1;
for (int i = 1;i<=n;i++) {
answer *= m;
}
return answer;
}
```

### 7.7. Recursive Sequence (Fibonacci-style)
A function `f(n)` that calculates the n-th term of the sequence defined by `a[1]=1`, `a[2]=2`, and `a[i] = a[i-1] + a[i-2]`.

*Source File: `main (37).c`*
```c
#include <stdio.h>

int f(int n);
int main()
{
   int n;
   scanf("%d",&n);
   printf("%d",f(n));
   return 0;
 }
int f(int n) {
    int a[100] = {0};
    a[1] = 1;
    a[2] = 2;

    for (int i =3;i<=n;i++) {
        a[i]= a[i-2]+a[i-1];
    }
    return a[n];
}
```

### 7.8. Armstrong Number Finder
A function `fun(x)` that checks if a 3-digit number is an Armstrong number (the sum of the cubes of its digits equals the number itself).

*Source File: `main (38).c`*
```c
#include<stdio.h>
int fun(int x);
int main()
{ int m,n,i;
  scanf("%d",&n);
  for(i=n;i<=999;i++)
    {
        m=fun(i);
        if(m==1)
            printf("%d ",i);
    }
}
int fun(int x) {
    int answer=0;
    int a = x /100;
    int b = (x % 100)/  10;
    int c = x%10;
    if (a*a*a + b*b*b + c*c*c == x) {
        answer = 1;
    }
    else {
        answer = 0;
    }
return answer;
}
```

### 7.9. Matrix Transposition
A function `fun` that initializes a 4x4 matrix and then transposes it.

*Source File: `main (39).c`*
```c
#include<stdio.h>
void fun(int a[][4], int n);
int main()
{  int i,j,n;
    int a[4][4];
    scanf("%d",&n);
    fun(a,n);
    for(i=0;i<4;i++)
    {
        for(j=0;j<4;j++)
            printf("%3d",a[i][j]);
        printf("\n");
    }
}
void fun(int a[][4], int n) {
    int i, j;
    int temp[4][4];

    printf("before:\n");

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            a[i][j] = n * i + j;
            temp[i][j] = a[i][j];
            printf("%3d", a[i][j]);
        }
        printf("\n");
    }
    printf("after:\n");

    for (i = 0; i < 4; i++) {
        for (j = 0; j < 4; j++) {
            a[j][i] = temp[i][j];
        }
    }
}
```

### 7.10. Word Counter
A function `words(s[])` that counts the number of words in a given string.

*Source File: `main (40).c`*
```c
#include<stdio.h>
int words(char s[]);
int main()
{
    char s[100];
    gets(s);
    printf("%d",words(s));
}
int words(char s[]) {
    int count = 0;
    int in_word = 0;
    int i = 0;
    
    while(s[i] != '\0'){
        if(s[i] != ' '){
            if(in_word == 0){
                count ++;
                in_word = 1;
            }
        }
        else{
            in_word = 0;
        }
        i++;
    }    
    return count;
}
```

### 7.11. Password Validator
A function `pws(s[])` that validates a password. It returns 1 (pass) if the password is longer than 6 characters and contains a mix of letters, digits, and special characters. Otherwise, it returns 0 (fail).

*Source File: `main (42).c`*
```c
#include<stdio.h>
#include<string.h>
int pws(char s[]);
int main()
{ 
    char str[50];
    int n;
    gets(str);
    n = pws(str);
    if (n==1)
        printf ("pass");
    else
        printf ("fail");
    return 0;
}
int pws(char s[]) {
    int len = strlen(s);
    if (len <= 6) {
        return 0;
    }

    int has_alpha = 0, has_digit = 0, has_special = 0;
    for (int i = 0; i < len; i++) {
        char c = s[i];
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z')) {
            has_alpha = 1;
        } else if (c >= '0' && c <= '9') {
            has_digit = 1;
        } else {
            has_special = 1;
        }
    }

    return (has_alpha && has_digit && has_special);
}
```

### 7.12. String Concatenation
A function `catstr` that appends the contents of one string to the end of another.

*Source File: `main (48).c`*
```c
#include<stdio.h>
#include<string.h>
void  catstr(char *a , char  *b)
{
      int i = 0;
      while (a[i] != '\0') {
          i++;
      }
      int j = 0;
      while (b[j] != '\0' && i < 19) {
          a[i++] = b[j++];
      }
      a[i] = '\0';
}
int  main( )
{  char  a[20] , b[10];
   
       fgets(a, sizeof(a), stdin);
       a[strcspn(a, "\n")] = '\0';
      
       fgets(b, sizeof(b), stdin);
       b[strcspn(b, "\n")] = '\0';
   
       catstr(a, b);
       printf("%s\n", a);
}
```

---

## 8. Pointers

Code that utilizes pointers for direct memory manipulation, such as passing arguments by reference.

### 8.1. Swapping Two Integers
Reads two integers and swaps their values using pointers.

*Source File: `Main (44).c`*
```c
#include<stdio.h>
int main()
{
    int a, b;
    int *pa = &a, *pb = &b;
    int temp;
    
    scanf("%d%d", pa, pb);
    
    temp = *pa;
    *pa = *pb;
    *pb = temp;
    
    printf("%d,%d", *pa, *pb);
    return 0;
}
```

### 8.2. Separating a Double into Integer and Fractional Parts
A function that takes a double and two pointers. It stores the integer part of the double in the location pointed to by `ip` and the fractional part in the location pointed to by `fp`.

*Source File: `Main (43).c`*
```c
#include<stdio.h>
void fun(double x, int *ip, double *fp);
int main() {
    double i ;
    scanf("%lf",&i);
    int t;
    double f;

    fun(i,&t,&f);
    printf("整数部分：%d，小数部分：%g",t,f);
}
void fun(double x, int *ip, double *fp){
    *ip = x / 1;
    *fp = x - *ip;
}
```

### 8.3. Palindrome Checker with Pointers
A function `fun(char *p)` that takes a pointer to a string and checks if it is a palindrome (reads the same forwards and backward).

*Source File: `Main (45).c`*
```c
#include<stdio.h>
#include<string.h>
int fun(char *p);
int main() {
    int a = 1;
    char c[100] ;
    scanf("%s",c);
    a = fun(c);
    if (a == 0) {
        printf("是回文串");
    }
    else {
        printf("不是回文串");
    }
    return 0;
}

int fun(char *p) {
    int answer = 0;
    int lenth = strlen(p);
    for (int i = 0;i<=lenth/2;i++) {
        if (p[i]!=p[lenth - i-1]) {
            answer = 1;
            break;
        }
    }
    return answer;
}
```

### 8.4. Separating a String by Character Type
A function `fun` that takes a source string and two destination strings. It iterates through the source and copies all digit characters to the first destination string (`s1`) and all letter characters to the second (`s2`).

*Source File: `Main (46).c`*
```c
#include<stdio.h>
#include<string.h>
void fun(char *s, char *s1, char *s2);
int main() {
    char s[100];
    char s1[100];
    char s2[100];
    scanf("%s",s);
    fun(s,s1,s2);
    return 0;
}

void fun(char *s, char *s1, char *s2) {
    int lenth = strlen(s);
    int j =0;
    int k =0;

    for (int i =0;i<=lenth;i++) {

        if (s[i]>= '0' && s[i]<= '9') {
            s1[j] = s[i];
            j++;
        }
        if (s[i]>= 'A'  && s[i]<= 'Z') {
            s2[k] = s[i];
            k++;
        }
        if (s[i]>= 'a'  && s[i]<= 'z') {
            s2[k] = s[i];
            k++;
        }
    }
    s1[j] = '\0'; // Null-terminate the strings
    s2[k] = '\0';
    printf("%s\n", s1);
    printf("%s\n", s2);
}
```