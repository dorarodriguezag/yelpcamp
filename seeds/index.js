const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: '696d652dc87bc6f527c52206',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/durvl8c2b/image/upload/v1743547715/YelpCamp/ktj8tqcetw9tq03gvdic.jpg',
                    filename: 'YelpCamp/gvsw2cesgpfc6gbl813u',
                },
                {
                    url: 'https://res.cloudinary.com/durvl8c2b/image/upload/v1751346630/YelpCamp/l4ysdfaekzmok6bsxdzh.jpg',
                    filename: 'YelpCamp/l4ysdfaekzmok6bsxdzh',
                }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea cumque officiis veniam numquam. Quidem id, molestias debitis necessitatibus delectus sit modi distinctio nemo reprehenderit. Natus at voluptas pariatur accusantium?',
            price: 25   
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})