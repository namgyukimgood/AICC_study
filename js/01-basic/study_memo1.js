// let age =parseInt(prompt('나이:'));
// let isAdult=false;

// if(age>20){
//     isAdult=!isAdult;
// }
// console.log(isAdult);

// if(age>=20){
//     isAdult=true;
// }else{
//     isAdult=false;
// }
// console.log(isAdult);

// let score=parseInt(prompt('점수입력:'));
// let grade='F';
// if(score>=90){
//     grade='A';
// }else if(score>=80){
//     grade='B';
// }else if (score>=70){
//     grade='c';
// }else if(score>=60){
//     grade='D';
// }else{
//     grade='Unkown';
// }
// console.log('등급:',grade);

// let busTimenumber=parseInt(prompt("버스정거장수를 입력하세요"));
// if(busTimenumber<=10){
//     t=busTimenumber*2;
//     console.log('소요시간은:',t,'분');
// }else{
//     t=10*2;
//     q=(busTimenumber-10)*4;
//     z=t+q;
//     console.log('소요시간은:',z,'분');
// }

// let busnumber=parseInt(prompt("지하철 정거장 수를 입력하세요"));
// if(busnumber<=7){
//     t=busnumber*3;
//     console.log("소요시간은:",t,'분');
// }else{
//     t=7*3;
//     q=(busnumber-7)*2;
//     z=t+q;
//     console.log('소요시간은:',z,'분');
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let data=parseInt(prompt("숫자를 입력하세요"));
// if(data%3==0){
//     console.log('3의 배수입니다:',data);
// }else{
//     console.log('3의 배수가 아닙니다');
// }

// let number=parseInt(prompt('숫자를 넣어주세요'));
// if(number%2==0){
//     console.log('짝수입니다:',number);
// }else{
//     console.log('홀수입니다',number);
// }

// let bignumber=parseInt(prompt('1번째 숫자를 넣어주세요'));
// let smallnumber=parseInt(prompt('2번째 숫자를 넣어 주세요'));
// if(bignumber>smallnumber){
//     console.log("큰숫자",bignumber);
// }else{
//     console.log("큰숫자",smallnumber);
// }
    


// let number1=parseInt(prompt('1번째 숫자를 넣어주세요'));
// let number2=parseInt(prompt('2번째 숫자를 넣어주세요'));
// let number3=parseInt(prompt('3번째 숫자를 넣어주세요'));
// tmp=0;
// if(number1<number2){
//     let tmp=number1;
//     number1=number2;
//     number2=tmp;
// }if(number1<number3){
//     let tmp=number1;
//     number1=number3;
//     number3=tmp;
// }if(number2<number3){
//     let tmp=number2;
//     number2=number3;
//     number3=tmp;
// }
// console.log(number1,number2,number3);



// let c=parseInt(prompt('첫번째 숫자를 입력하세요'));
// let d=parseInt(prompt('두번째 숫자를 입력하세요'));
// if(c>d){
//     if(c%2==0){
//       console.log("짝수입니다:",c);
//     }else{
//         console.log("홀수입니다");
//     }
// }else{
//     if(d%2==0){
//         console.log("짝수입니다:",d);
//     }else{
//         console.log('홀수입니다')
//     }
// }

// let e=parseInt(prompt("첫번째 숫자를 입력하세요"));
// let f=parseInt(prompt('두번째 숫자를 입력하세요'));
// let g=e+f;
// if(g%2==0&&g%3==0){
//     console.log("짝수이면서 3의 배수입니다",g);
// }else{
//     console.log('짝수가 아니며 3의 배수도 아닙니다');
// }
        


// let inputnumber=parseInt(prompt('숫자를 입력해 주세요'));
// if(inputnumber%3==0&&inputnumber%5==0){
//     console.log("3의 배수이면서 5의 배수입니다:",inputnumber);
// }else if(inputnumber%3!=0){
//     console.log(inputnumber);
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 4일 study1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let time =parseInt(prompt('시간을 입력하세요'));
// if(time<=30){
//     firstmoney=time*3000;
//     console.log(`전체 금액은 ${firstmoney})입니다`);
// }else{
//     count=10;
//     firstmoney=30*3000;
//     lastmoney=(time-30);
//     if(lastmoney<10){
//         console.log(`전체 금액은 ${firstmoney}입니다`);
//     }else if(lastmoney/count==0){
//         console.lot(`전체금액은 ${firstmoney}입니다`);
//     }else if(lastmoney/count!=0){
//         result=firstmoney+(lastmoney/count)*500;
//         console.log(`전체금액은 ${result}입니다`);
//     }

// }

// let firstnumber=parseInt(prompt('배달도시락의 갯수를 입력해 주세요'));
// if(firstnumber<=10){
//     z=firstnumber*2500;
//     console.log(`도시락 금액은 ${z}입니다`);
// }else{
//     count=10;
//     zz=10*2500;
//     zzz=(firstnumber-10);
//     if(zzz<=10){
//         result0=zz+(zzz*2400);
//         console.log(`도시락 총 금액은 ${result0}입니다`);
//     }else if(zzz>10){
        
//         result1=zz+(zzz*2400);
//         console.log(`도시락의 총 금액은 ${result1}입니다`);

//     }
// }

// let disketnumber=parseInt(prompt('디스켓의 갯수를 입력하세요'));
// let z=disketnumber*5000;
// if(disketnumber<10){
//     console.log(`${disketnumber}통을 사려면 ${z}가격을 지불해야 합니다`);
// }else if(disketnumber>=10&&disketnumber<100){
//     let zz=z-disketnumber*0.1;
//     console.log(`${disketnumber}통을 사려면 ${zz}가격을 지불해야 합니다`);
// }else if(disketnumber>=100){
//     let zzz=z-disketnumber*0.12;
//     console.log(`${disketnumber}통을 사려면 ${zzz}가격을 지불해야 합니다`);
// }

// let score1=parseInt(prompt('A과목의 성적을 입력하세요'));
// let score2=parseInt(prompt('B과목의 성적을 입력하세요'));
// let score3=parseInt(prompt('C과목의 성적을 입력하세요'));
// z=score1+score2+score3;
// zz=z/3;
// if(zz>=90){
//     console.log('A학점 입니다');
// }else if(zz>=80){
//     console.log("B학점 입니다");
// }else if(zz>=70){
//     console.log('C학점 입니다');
// }else if(zz>=60){
//     console.log('D학점 입니다');
// }else{
//     console.log('F학점 입니다')
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~``
// 2024년 7월 4일 study2
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let company=['네','카','라','쿠','베','당','토'];
// console.log(company[0]);
// for(let i=0; i<7;i++){
//   console.log(company[i]);  
// }

// for(let i; i<company.length;i++){
//     console.log(company[i]);
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let person={
//     name: '홍길동',
//     age: 20
// }
// for(let key in person){
//     console.log(key,':'person[key]);
// }

// let company=['네','카','라','쿠','베','당','토'];
// for(let c in company){
//     console.log(c);
//     console.log(company[c]);
// }

// for(let c of company){
//     console.log(c);
// }

// let str='javascript';
// for(let ch of str){
//     console.log(ch);
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 4일 오후 study
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let j=0;
// for(let i=1;i<=100;i++){
//     j=j+i;
// }console.log(j);

// let h=0;
// let k=0;
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         h=h+i;
//        }else{
//         k=k+i;
//     }
// } console.log(h);
// console.log(k);

// for(i=300;i>=1;i--){
//     if(i%3==0){
//         console.log('3의 배수입니다:',i);
//     }
// }


// let q=0;
// for(i=1;i<=100;i++){
//     if(i%3!=0 || (i%3==0 && i%5==0)){
//          q=q+i;
//     }
// }console.log(q);

// let m=0;
// let number1=parseInt(prompt('첫번째 수를 입력하세요'));
// let number2=parseInt(prompt("두번째 수를 입력하세요"));
// for(let i=number1; i<=number2;i++){
//     m=m+i;
// }console.log('두수 사이의 합은?',m-number1-number2);

// let b=0;
// for(i=1;i<=10;i++){
//     let num1=parseInt(prompt(`${i}번째 숫자를 입력하세요`));
//     b=num1+b;
// }console.log(`10개 숫자의 평균은 ${b/10} 입니다`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 4일 study3
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// for(let i=2;i<=9;i++){
//     for(let j=1;j<=9;j++){
//       console.log(`${i}*${j}=${i*j}`);
//       }console.log('~~~~~~~~~~~~~');
// }

// let fullnumber = 100; // 창고에 저장된 쌀의 총 kg 수
// let onenumber = 80 * 1000; // 1kg 당 쌀의 알갱이 수 (여기서는 g로 가정)
// let z = fullnumber * onenumber; // 창고에 저장된 총 쌀의 알갱이 수
// let mouse = 20; // 쥐 한 마리가 하루에 먹는 쌀의 양 (g)
// let k = 0; // 날 수를 세는 변수
// let mousenumber = 2; // 초기 쥐의 숫자 (암수 1쌍)

// // 쥐가 매일 쌀을 먹고 10일마다 쥐의 수가 2배가 되며 창고의 쌀을 소비하는 과정을 시뮬레이션
// while (z > 0) { // z가 0 이하가 될 때까지 반복
//     k += 1; // 날 수 증가
//     // 매일 쥐들이 먹는 쌀의 양을 계산
//     let dailyConsumption = mouse * mousenumber;
//     // 남은 쌀의 양에서 쥐들이 먹은 만큼 뺌
//     z -= dailyConsumption;

//     // 만약 남은 쌀의 양이 0 이하라면 반복을 종료
//     if (z <= 0) {
//         console.log(`${k}일 동안 창고의 쌀이 없어졌습니다, 쥐의 숫자는 ${mousenumber}입니다.`);
//         break;
//     }

//     // 매 10일마다 쥐의 숫자가 2배로 증가
//     if (k % 10 === 0) {
//         mousenumber *= 2;
//     }
// }



// let oneday=10;
// let total=0;
// for(let i=1;i<=30;i++){
//     total=total+oneday;
//     oneday=oneday*2;
// }console.log('한달동안 저축한 금액은:',total);

// let sum=0;
// let lastnumber=0;
// for(i=1;sum<=10000;i=i+2){
//     sum=sum+i;
//     lastnumber=i;
// }console.log(`10000을 넘지않는 마지막수는 ${lastnumber-2}`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 5일 오전 스터디
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function 함수 기능
// function sum1(p1,p2){
//     let sum=p1+p2;
//     return sum;
// }

// let s1=sum1(23,43);
// console.log(s1);

// //함수를 변수에 담을 수 있다 
// sum2= function(p1,p2){
//     let sum=p1+p2;
//     return sum;
// }
// s=sum2;
// console.log(s(1,3));
// console.log(sum2(1,2)); //함수호출

// //화살표함수 Arrow function
// sum3=(p1,p2)=>{
//     let sum=p1,p2;
//     return sum;
// }
// console.log(sum3(3,2));

// mf=(a,b)=>a*b;
// console.log(mf(2,2));

// //함수를 왜?
// //자주 사용하는 기능을 미리 정의 해 두고 필요할때 호출
// //입력(매개변수), 처리(본문) ,출력 (return)

// function nToTotal(value){
//     let sum=0;
//     for(let i=1;i<=value;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// console.log(nToTotal(10));
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 5일 퀴즈 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function onenumber(n){
//     let sum=0;
//     for(let i=1;i<=n;i=i+2){
//         sum=sum+i;
//         }return sum;
// }
// let twonumber=parseInt(prompt('한개의 수를 입력하세요'));
// console.log(onenumber(twonumber));

// function absnumber(n){
//      s=Math.abs(n);
//      return s;
// }
// let absnumber1=parseInt(prompt('한개의 수를 입력하세요'));
// console.log(absnumber(absnumber1));

// function inchnumber(n){
//     nn=n/2.54;
//     return nn; 
// }
// let inchnumber2=parseInt(prompt('센티미터를 입력하세요'));
// console.log(inchnumber(inchnumber2));




// function byteToBit(byte) {
//     return byte * 8;
// }

// function convertFileSize(size, unit) {
//     let sizeBytes = size;  // 입력된 파일 크기 (byte)
    
//     // 단위에 따라 sizeBytes를 byte 단위로 변환
//     switch (unit.toUpperCase()) {
//         case 'GB':
//             sizeBytes *= Math.pow(1024, 3);
//             break;
//         case 'MB':
//             sizeBytes *= Math.pow(1024, 2);
//             break;
//         case 'KB':
//             sizeBytes *= 1024;
//             break;
//         case 'B':
//             sizeBytes *= 1;
//             break;
//         default:
//             console.log('유효하지 않은 단위입니다.');
//             return;
//     }
    
//     let sizeBits = byteToBit(sizeBytes);  // byte를 bit로 변환
    
//     // 적절한 단위로 출력
//     if (sizeBits >= Math.pow(2, 40)) {
//         console.log(`파일 크기는 ${(sizeBits / Math.pow(2, 40)).toFixed(2)} 테라비트입니다.`);
//     } else if (sizeBits >= Math.pow(2, 30)) {
//         console.log(`파일 크기는 ${(sizeBits / Math.pow(2, 30)).toFixed(2)} 기가비트입니다.`);
//     } else if (sizeBits >= Math.pow(2, 20)) {
//         console.log(`파일 크기는 ${(sizeBits / Math.pow(2, 20)).toFixed(2)} 메가비트입니다.`);
//     } else if (sizeBits >= Math.pow(2, 10)) {
//         console.log(`파일 크기는 ${(sizeBits / Math.pow(2, 10)).toFixed(2)} 킬로비트입니다.`);
//     } else {
//         console.log(`파일 크기는 ${sizeBits} 비트입니다.`);
//     }
// }

// // 사용 예시
// let input = prompt("파일 크기와 단위를 입력하세요 (예: 10 GB): ");
// let inputArr = input.trim().split(' ');
// let size = parseFloat(inputArr[0]);  // 파일 크기 숫자 부분
// let unit = inputArr[1];  // 단위 부분

// convertFileSize(size, unit);
// ~~~~~~~~~~~~~~~~~~~~~~~
// cm미터 값을 인치로 변화하고 단위도 입력하는 부분은 제가 짜다가 이해가 안되서 챗gpt에 물어봤습니다
// 너무 어려운거 같아요 
// ~~~~~~~~~~~~~~~~~~~~~~~





// function bminumber(height, weight) {
//     let standardweight = (height - 100) * 0.9;
//     let bminumber1 = (weight / standardweight) * 100;
//     return bminumber1;
// }

// let height1 = parseInt(prompt('현재 키를 적어주세요'));
// let weight1 = parseInt(prompt('현재 몸무게를 적어주세요'));

// let bmi = bminumber(height1, weight1);

// if (bmi >= 200) {
//     console.log('위험한 비만입니다');
// } else if (bmi >= 150 && bmi < 200) {
//     console.log('고도비만입니다');
// } else if (bmi >= 130 && bmi < 150) {
//     console.log('중증도 비만입니다');
// } else if (bmi >= 120 && bmi < 130) {
//     console.log('경도비만입니다');
// } else if (bmi >= 110 && bmi < 120) {
//     console.log('과체중입니다');
// } else if (bmi >= 90 && bmi < 110) {
//     console.log('정상체중입니다');
// } else if (bmi >= 80 && bmi < 90) {
//     console.log('경한 저체중입니다');
// } else if (bmi < 80) {
//     console.log('저체중입니다');
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 5일 오후 퀴즈 1
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function recursive(){
//     console.log('재귀호출');
//     recursive();
// }
// recursive(); //무한반복 돌리지 말자 

// function recursive(n){
//     console.log('call!',n);
//     if(n==1){
//         console.log('재귀호출 끝! 이제부터 return');
//         return;//리턴값이 없어 리턴만 쓰면 함수의 종료에 해당한다 
//     }
//     recursive(n-1);
//     console.log('retrun',n);
// }

// let factorial=parseInt(prompt('숫자를 넣어주세요'));
// let number=1;
// for(let i=1;i<=factorial;i++){
//     number=number*i;
// }console.log(`${factorial}팩토리얼은 ${number}입니다`);


// let factorial1=parseInt(prompt('숫자를 넣어주세요'));
// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     }
//      return n * factorial(n - 1);
// }
// for(let i=1;i<=factorial1;i++){
//     f=factorial(factorial1);
// }console.log(`${factorial1}팩토리얼은 ${f}입니다`);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for(let i=0;i<5;i++){
//     console.log(Math.random());
// }

// let n1=Math.random();
// let n2=n1*100;
// let n3=Math.floor(n2);

// console.log(n1);
// console.log(n2);
// console.log(n3);

// console.log(Math.floor(Math.random()*100));

// Array 활용(index만 사용하기)

// 난수 저장(로또 번호 저장하기)

// let numbers = [0, 0, 0, 0, 0, 0]; // 6개의 요소를 가진 Array 생성

//     let xnumber=1;
// for(let i = 0; i < numbers.length; i++){
//   numbers[i] = Math.floor(Math.random() * 45 + 1); //난수 저장
//   xnumber=numbers[i];
//   if(i==0){
//     t=xnumber;
//   }else if(i>=0){
//     if(t!=numbers[i]){
//         break;
//     }else if(t==numbers[i]){
//         tt=numbers[i]=Math.floor(Math.random()*45+1);
//     }
//   }
// }
// 중복값이 나오지 않게 난수 발생 코드를 짜야하는데 t==numbers[i]가 같으면 어떻게 코드를
// 짜야 할지 모르겠어 코드 다시 짜주고 설명도 해주고 

// let numbers = [0, 0, 0, 0, 0, 0]; // 6개의 요소를 가진 Array 생성
// let min = 1;
// let max = 45;

// for (let i = 0; i < numbers.length; i++) {
//     let randomNum;
    
//     do {
//         randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // min 이상 max 이하의 정수 난수 생성
//     } while (isDuplicate(randomNum, numbers, i)); // 중복 확인

//     numbers[i] = randomNum; // 중복이 아니면 배열에 추가
// }

// console.log(numbers);

// // 중복 확인 함수
// function isDuplicate(num, arr, index) {
//     for (let j = 0; j < index; j++) {
//         if (arr[j] === num) {
//             return true; // 중복이면 true 반환
//         }
//     }
//     return false; // 중복이 아니면 false 반환
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2024년 7월 8일 스터디 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function myrand(range, start) {
//     return Math.floor(Math.random() * range + start);
// }

// function result(numbercount, flagcount) {
//     let flags = new Array(flagcount).fill(false);
//     let numbers = new Array(numbercount);
//     for (let i = 0; i < numbercount; i++) {
//         let num;
//         do {
//             num = myrand(45, 1);
//         } while (flags[num - 1]); // Repeat if the number is already flagged as True
        
//         // Assign the unique number and set the corresponding flag to True
//         numbers[i] = num;
//         flags[num - 1] = true;
//     }
//     return { numbers, flags }; // Return both numbers and flags
// }

// const { numbers, flags } = result(6, 45);

// console.log('Result Numbers:', numbers);
// console.log('Flag List:', flags);

 
// let num = prompt("주민번호를 넣어주세요"); // 입력을 문자열로 받습니다.
// let numArray = num.split(""); // 문자열을 배열로 만들고, 각 요소를 숫자로 변환합니다.
// let sum = 0;
// for(i=0;i<12;i++){
//     if(i<8){
//         sum=sum+numArray[i]*(i+2);
//     }else{
//         sum=sum+numArray[i]*(i-6);
//     }
// }

// let checknumber=11-(sum%11);
// if(checknumber>=10){
//     checknumber=checknumber%10;
// }

// if (checknumber === parseInt(numArray[12])) {
//     console.log('유효');
// } else {
//     console.log('유효하지 않음');
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
function d(n) {
    let sum = n;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }
  
  function findSelfNumbers(limit) {
    let selfNumbers = [];
  
    // 생성자가 있는 숫자를 체크할 배열을 초기화합니다.
    let hasGenerator = new Array(limit + 1).fill(true);
  
    // 생성자가 있는 숫자를 찾아서 체크합니다.
    for (let i = 1; i <= limit; i++) {
      let generator = d(i);
      if (generator <= limit) {
        hasGenerator[generator] = false;
      }
    }
  
    // 생성자가 없는 숫자(셀프넘버)의 합을 계산합니다.
    let selfNumberSum = 0;
    for (let i = 1; i <= limit; i++) {
      if (hasGenerator[i]) {
        selfNumbers.push(i);
        selfNumberSum += i;
      }
    }
  
    return { selfNumbers, selfNumberSum };
  }
  
  let limit = 5000;
  let { selfNumbers, selfNumberSum } = findSelfNumbers(limit);
  
  console.log(`1 이상 ${limit} 이하의 셀프넘버들의 합: ${selfNumberSum}`);
  




