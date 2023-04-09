/*---------------------- select all checkbox --------------------------*/
  function selectAll(selectAll){              // 전체클릭 함수
    let checkboxes=                           // 변수명 지정
    document.getElementsByName("terms");      // 이름값이 "terms"로 지정된 요소들을 불러옴

    checkboxes.forEach(function(checkbox){    // 지정된 변수들에 기능을 부여(forEach : 루프돌기)
      checkbox.checked = selectAll.checked    // HTML의 체크박스 요소들의 체크속성 = 체크박스의 요소의 체크속성(선택/해제) 
    });
  };