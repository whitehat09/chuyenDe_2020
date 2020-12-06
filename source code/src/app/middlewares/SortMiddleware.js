module.exports = function SortMiddleware(req, res, next) {
    res.locals._sort = {
        // biến sắp xếp
        enabled: false, //khi qureyparam không có thì để mặc địch
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        //res.locals._sort.enabled = true;// trên quret có _sort
        //res.locals._sort.type = res.query.tpye;// lấy lựa chọn type trên query
        //res.locals._sort.column = res.query.column;
        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column,
        });
    }

    next();
};
