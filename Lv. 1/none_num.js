// 없는 숫자 더하기
// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열
// numbers가 매개변수로 주어집니다. 
//numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수
//를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	           result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	     6

function solution(numbers) {
    // 0~9까지 더한 값 - 배열요소에 있는 값 더한 값
    return 45 - numbers.reduce((acc,val) => acc + val, 0);
}

console.log(solution([1,2,3,4,6,7,8,0]))
console.log(solution([5,8,4,0,6,7,9]))