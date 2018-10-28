var projectName = 'kittenbook'; 
var versionNumber = '0.0.1';
var currentDate = new Date(); //Date 객체 만들기, 이 객체를 이용해 날짜를 기록한다

//currentTime은 '2018-10-19 at 14:45:12'와 같은 형식을 갖는다
var currentTime = currentDate.getFullYear() + '-' + //년도
                    (currentDate.getMonth() + 1)+ '_' + //월
                    currentDate.getDate() + ' at ' + //일
                    currentDate.getHours() + ':' + //시
                    currentDate.getMinutes() + ':' + //분
                    currentDate.getSeconds(); //초