export default class Timer {
    constructor(duration, tickFunction, endFunction)
    {
        this.duration = duration;
        this.tickFunction = tickFunction;
        this.endFunction = endFunction;
        this.endTime = Date.now() + duration;
        this.tick(); //starts the first tick after being constructed
    }

    get timeRemaining() {
        return this.endTime - Date.now();
    };

    tick = () => {
        console.log(this.timeRemaining);
        this.tickFunction(this.timeRemaining) //passes back and updates app.js with current time

        // accounts for lag by only running on the next round second and will now only call tick every second
        tickDelay = this.timeRemaining % 1000;
        this.timeout = setTimeout(this.tick, tickDelay)
    }
}