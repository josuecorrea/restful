const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get','post','put','delete'])
BillingCycle.updateOptions({new: true, runValidators: true})//retorna obj atualizado apos update

BillingCycle.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next){
    const bundle = res.locals.bundle
    if(bundle.errors){
        var errors = parseErrors(bundle.erros)
        res.status(500).json({errors})
    }
}

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(value)
        }
    })
})


module.exports = BillingCycle