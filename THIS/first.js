const user = {
    data: [{
        name: 'Jelena',
        age: 29
    },
    {
        name: 'Nikola',
        age: 28
    }],
    clickHandler: function () {
        console.log(this.data);
    }
}

document.getElementById('btn').addEventListener('click', user.clickHandler.bind(this))