const EventEmitter=require("events");

const emitter=new EventEmitter();

emitter.on('greet', (name)=>{
    console.log(`Hello, ${name}`);
})

// emitter.emit('greet', "Vidit");

setInterval(()=>{
    emitter.emit('greet', 'Vidit')
},5000)