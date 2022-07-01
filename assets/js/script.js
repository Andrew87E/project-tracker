$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  
  $('#hourly-rate').on('change', (e)=>{
    if(isNaN(e.target.value)){
        e.target.value = ''
    }else{
      e.target.value = formatter.format(e.target.value);
    }
  })
  
  $('#due-date').on('change', (e)=>{
    if(isNaN(e.target.value)){
        e.target.value = ''
    }else{
      e.target.value = moment().format('MM-DD-YYYY');
    }
  })

  
  