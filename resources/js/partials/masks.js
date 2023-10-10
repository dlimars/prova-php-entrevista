window._ = require('lodash')

try {
  window.Popper = require('@popperjs/core').default
  window.$ = window.jQuery = require('jquery')
} catch (e) {}

jQuery(function () {
  masks()

  function masks() {
    //Phone
    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009'
      },
      spOptions = {
        onKeyPress: function (val, e, field, options) {
          field.mask(SPMaskBehavior.apply({}, arguments), options)
        }
      }
    $('.mask-phone , [type="tel"], [id="tel"]').mask(SPMaskBehavior, spOptions)

    //CEP
    let cep = $('.mask-cep, [name="cep"], [id="cep"]')
    cep.mask('00000-000', {
      reverse: true
    })
    cep.attr('inputmode', 'numeric')

    //CPF
    let cpf = $('.mask-cpf, [name="cpf"], [id="cpf"]')
    cpf.mask('000.000.000-00', {
      reverse: true
    })
    cpf.attr('inputmode', 'numeric')

    //CNPJ
    let cnpj = $('.mask-cnpj, [name="cnpj"], [id="cnpj"]')
    cnpj.mask('00.000.000/0000-00', {
      reverse: true
    })
    cnpj.attr('inputmode', 'numeric')

    //CPF ou CNPJ
    let cpfCnpj = $('.mask-cpf-cnpj, [name="cpf-cnpj"], [id="cpf-cnpj"]')
    let options = {
      onKeyPress: function (cpf, ev, el, op) {
        let masks = ['000.000.000-000', '00.000.000/0000-00']
        cpfCnpj.mask(cpf.length > 14 ? masks[1] : masks[0], op)
      }
    }
    cpfCnpj.length > 11 ? cpfCnpj.mask('00.000.000/0000-00', options) : cpfCnpj.mask('000.000.000-00#', options)
    cpfCnpj.attr('inputmode', 'numeric')

    //Credit number
    let creditCard = $('.mask-credit-card, [name="credit-card"], [id="credit-card"]')
    creditCard.mask('0000 0000 0000 0000', {
      reverse: true
    })
    creditCard.attr('inputmode', 'numeric')

    //CVV
    let cvv = $('.mask-cvv, [name="cvv"], [id="cvv"]')
    cvv.mask('000', {
      reverse: true
    })
    cvv.attr('inputmode', 'numeric')

    //Date
    let date = $('.mask-date, [name="date"], [id="date"], [type="date"]')
    date.mask('00/00/0000', {
      reverse: true
    })
    date.attr('inputmode', 'numeric')

    //Month and Year
    let monthYear = $('.mask-monthYear, [name="monthYear"], [id="monthYear"]')
    monthYear.mask('00/0000', {
      reverse: true
    })
    monthYear.attr('inputmode', 'numeric')
  }
})
