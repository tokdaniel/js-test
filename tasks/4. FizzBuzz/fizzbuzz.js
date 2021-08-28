export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  let arr_fb = [];
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      arr_fb[]="FizzBuzz";
    }else if (i % 3 === 0){
	  arr_fb[]="Fizz";
    }else if (i % 5 === 0){
	  arr_fb[]="Buzz";
    }else{
      arr_fb[]=i;
    }
  }
  return arr_fb;
}
