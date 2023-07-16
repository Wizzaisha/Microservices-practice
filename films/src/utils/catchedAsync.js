export default (fn) => (req, res, next) => fn(req, res).catch((err) => next(err));

/* The same shit */
/* (fn) => {
    return (req, res, next) => {
        fn(req, res).catch((err) => {
            next(err);
        })
    }
} */