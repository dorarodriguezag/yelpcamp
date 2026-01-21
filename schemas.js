const BaseJoi = require('joi');
const { number } = require('joi');
const sanitizeHtml = require('sanitize-html');

const extension = (joi) => ({
    type: 'string',
    base: joi.string(),
    messages: {
        'string.escapeHTML': '{{#label}} must not include HTML!'
    },
    
    rules: {
        escapeHTML: {
            validate(value, helpers) {
                const clean = sanitizeHtml(value, {
                    allowedTags: [],
                    allowedAttributes: {},
                });
                if (clean !== value) return helpers.error('string.escapeHTML', { value })
                return clean;
            }
        }
    }
});

const Joi = BaseJoi.extend(extension)


module.exports.campgroundSchema = Joi.object({
        campground: Joi.object({
        title: Joi.string().min(2).max(50).required().escapeHTML(),
        price: Joi.number().min(1).max(10000).precision(2).required(),
        // image: Joi.string().required(),
        location: Joi.string().min(2).max(50).required().escapeHTML(),
        description: Joi.string().min(10).max(1000).pattern(/[a-zA-Z]/).required().escapeHTML().messages({'string.pattern.base': 'Description must contain letters, not only numbers.'})
    }).required(),
    deleteImages: Joi.array()
});

module.exports.reviewSchema = Joi.object({
        review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        body: Joi.string().required().escapeHTML()
    }).required()
})