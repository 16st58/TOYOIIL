/**
 * 현재시간과 비교할 시간 비교해서 '~~초 전' 과 같은 문자열 반환
 * @param {int} date : 현재시간과 비교할 시간 입력
 * @returns {Date} : '~~초 전' 과 같은 문자열 반환 
 */
function calculate_date(date) {
    var today = new Date();

    var today_second = today.getSeconds();
    var today_minute = today.getMinutes();
    var today_hour = today.getHours();
    var today_year = today.getFullYear();
    var today_month = today.getMonth() + 1;
    var today_day = today.getDate();

    var date_second = date.getSeconds();
    var date_minute = date.getMinutes();
    var date_hour = date.getHours();
    var date_year = date.getFullYear();
    var date_month = date.getMonth() + 1;
    var date_day = date.getDate();

    if(today_year-date_year>0) {
        return String(today_year-date_year)+"년 전"
    } else if(today_month-date_month>0) {
        return String(today_month-date_month)+"달 전"
    } else if(today_day-date_day > 7) {
        return String((today_day-date_day)/7)+"주 전"
    } else if(today_day-date_day > 0) {
        return String(today_day-date_day)+"일 전"
    } else if(today_hour-date_hour>0) {
        return String(today_hour-date_hour)+"시간 전"
    } else if(today_minute-date_minute>0) {
        return String(today_minute-date_minute)+"분 전"
    } else {
        return String(today_second-date_second)+"초 전"
    }
}

/**
 * 들어온 데이터값으로 글 리스트 생성
 * @param {*} result : 데이터 값
 * @param {String} div_id : 리스트를 생성할 div
 */
function create_post_list(result, div_id){
    const parent = document.createElement('div');
    parent.className = "post";
    parent.id = result.id
    const div_title_element = document.createElement("div");
    div_title_element.innerText = result.data().title;
    div_title_element.id = "small_title";
    const div_content_element = document.createElement("div");
    div_content_element.innerText = result.data().content;
    div_content_element.id ="small_content";
    parent.appendChild(div_title_element);
    parent.appendChild(div_content_element);
    document.getElementById(div_id).appendChild(parent);
}