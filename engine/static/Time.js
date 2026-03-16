class Time {
    static ms = 20;
    static fps = 1000 / Time.ms;
    static deltaTime = Time.ms/1000;
    static time = 0;

    static update(delta = 1){
        Time.deltaTime = delta / 60;
        Time.fps = 1 / Time.deltaTime;
        Time.time += Time.deltaTime;
    }
}

window.Time = Time
export default Time;
