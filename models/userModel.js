const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
    },
    bio: {
        type: String,
        default: 'Please enter a bio'
    },
    profilePic : {
        type: String,
        default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAACUCAMAAABVwGAvAAAAMFBMVEXk5ueutLext7rq7Ozn6eqrsbS+w8Xh4+S2u77d4OHLz9HY29y7v8LGysynrrHP0tRcV/sZAAADw0lEQVR4nO2b3W7sIAyEAzH/EN7/bQ/JtqtV280aE0x0xPSm7dWnAYOBybJMTU1NTU1NTU1NTU1NTU1NXSsAWBZT9PjtVgIwISetY4xa+xyW9T6EhSRHKdVTQkgdlnsAAgStNvFD5T8p3ABwdVaon3APQqHNOhYOnP5l3KuFyYx0ELL827knoA0DDdTncAegH+WfsZ/phNj0ILwPA/v0T4/wz0kU3M4XB+ChRnaUf1BBV/gSLx+kGrrClzn5INTRFT7DiLdUwhVFPvtqh/awL7DhuXrzCh+XfYDYy/7A46oOc9KknEjyVAfNPDb7DHo3+4HHUryQaeaV3sVx4BHHlmtro9KV4mDAC7S6PdR/dCk7xlP9a3e1dDqGyQd0utKW9qaj7bffsr3pILTgdd/XILfgdS9d8A2FK9TN8Xr3pG1428RrwOs/uE2V2780mta9/j1BIPbKh2z/40YDnYrd8dYG9xg6llU34DFc5LZ0ywwXGaZh4WM4a0Akn9Q0xyMC/ZzLcklFXpglB105h9PoVObBI9au5LjD2PlIZ0m+2/nqi+9dGxNcEWFtYXz6A1NvXvcj7iufr62OjfXlvvaST3neV+e64WV/k4SauxbFdCn/yoff2wbQVW0ebsRzOATUa72Sg/JA4BBvzpseMLLf+tS8KDEsJ7ILsjybgVscnKOCxau3Iyzz+BgaLMn+QahU9PeIGYLZI3KvhOWvdJcA3y4A56O18vixOrsbpR8fghWMc8E5A7die5NkvUPA9bAsZJ90tHKvhyM4am3UKefghiZcV3BZlwknvvKsr2V7/Kdg+rAMyBfCYoKP2/ZxU1PbJlOxkdPFdSmuvV+Nfy+BMiamWi4TPpROoPqopqTv7yFASKe77Ik2oftucgXuXUgZ56CQvlt7Bct5e4IjVL5L7wxrqAo8vgeUqcOCHdqdewIqf+0cBJPw6wgG8NoweL4U7gBMVxkI5iy2T+aT1/T5yPMiAfCK+0hIHaz74rPtn0uQ82YYPtm2BoLpNLBPwJYJCLhPHpr46KkvcJ29a+ID07L9o7VR+bqP7JdI86/uk4cWbYT67bje/VJ9AoIe/yWoOtEMjpGuDG/lLSD9yZuoqunXlpQiqO7hgxqLb+CreMhfe/YB7/jwo0v8IKMND10dTcFustCLH/7zwiuFTkJwrsgvsrjRhSHmob82cQMKYxfuaDSmMHah4gYQB9EJiVmax9TtLkxf3xitbcJLiLEdtKzswnxtMqwycAm6Ae3AtxQGTw6TQGy7sI4Twr2pqamp/1v/AANWMWhBkRHPAAAAAElFTkSuQmCC'
    }
}, {
    timestamps: true,
})

module.exports = mongoose.model('User', userSchema)