let myTodo={
    day: 'Monday',
    meetings: 0,
    meetDone:0,
    addmeeting: function(meet=0){
        this.meetings = this.meetings + meet;
    },
    addmeetdone: function(meet=0){
        this.meetDone = this.meetDone + meet;
    },
    addsum: function(){
        return `Mett Left ${this.meetings - this.meetDone}`
    },
}

myTodo.addmeeting(4)
myTodo.addmeetdone(2)
console.log(myTodo.addsum());

