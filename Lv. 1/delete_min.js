// 제일 작은 수 제거하기
// 문제 설명
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, 
// solution을 완성해주세요. 
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, 
// [10]면 [-1]을 리턴 합니다.

// 입출력 예
// arr	        return
// [4,3,2,1]	[4,3,2]
// [10]	         [-1]

function solution(arr) {
    const 배열에서가장작은수 = Math.min(...arr);
    // splice(시작위치부터, 삭제할 요소의 개수) 제거
    arr.splice(arr.indexOf(배열에서가장작은수), 1);
    const answer = arr.length ? arr : [-1] // 0은 false이므로
    return answer;
}

console.log(solution([4,3,2,1]))
console.log(solution([10]))
