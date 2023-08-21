let data = {
    list : 'Friends',
    names : ['Harshal', 'Mridul', 'Rohit', 'Aditi', ],
    getFriends: function(){
        // console.log(this.names);
        this.names.map((item)=>{
            console.log(this.list, item);
        })
    }
}
data.getFriends();

