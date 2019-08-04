export default class Timer {
    constructor(duration, tickFunction, endFunction)
    {
        this.duration = duration;
        this.tickFunction = tickFunction;
        this.endFunction = endFunction;
        this.isRunning = false;
    }



    tick = () => {
        if (this.duration < 1000) {
            console.log("timer ended!");
            this.tickFunction(0);
            this.endFunction();
        }
        else {
            console.log(this.duration);
            this.duration = this.duration - 1000;
            this.tickFunction(this.duration); //passes back and updates app.js with current time
    
            // accounts for lag by only running on the next round second and will now only call tick every second
            tickDelay = this.duration % 1000;
            this.timeout = setTimeout(this.tick, 1000 + tickDelay);
        }
    }

    start = () => {
        if (this.isRunning) {
            console.log("can't start timer, timer already running")
            return;
        }
        else {
            this.isRunning = true;
            this.tick();
        }
    };

    stop = () => {
        this.isRunning = false;
        clearTimeout(this.timeout);
        this.timeout = null;
    };
}