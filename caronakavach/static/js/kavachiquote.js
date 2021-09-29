$(function(){
    $( ".policy-start-date" ).datepicker({
                changeMonth: true,
                changeYear: true,
                todayHighlight: true,
                autoclose: true,
                startDate: "today",
                endDate  : new Date(Date.now() + 60 * 24*60*60*1000)
   });
    $( ".custom-date-dob" ).datepicker({
                changeMonth: true,
                changeYear: true,
                todayHighlight: true,
                autoclose: true,
    endDate  : new Date()
   });
  });

    function restrictAlphabets(e){
      var x=e.which||e.keycode;
            if((x>=48 && x<=57) || x==8 ||
               (x>=35 && x<=40)|| x==46)
               return true;
            else
               return false;
    }

    function restrictNumbers(e){
         var inputValue = e.which||e.keycode;
            if(!(inputValue >= 65 && inputValue <= 90) && !(inputValue >= 97 && inputValue <= 122) && (inputValue != 32 && inputValue != 0))
               return false;
            else
               return true;
    }

  function contact_validate(contact){

        var Mobilenum = /^([1-9])([0-9]){9}$/;
          if(Mobilenum.test(contact) == false)
         {
          text = "Please enter a valid 10-digit contact number";
         } else {
          text="";
          }
        $('#contact').html(text);
  }

    function mobile_validate(Mobile){

        var Mobilenum = /^([1-9])([0-9]){9}$/;
          if(Mobilenum.test(Mobile) == false)
         {
          text = "please enter a valid 10-digit mobile number";
         } else {
          text="";
          }
        $('#mobilewar').html(text);
  }


    function email_validate(email){
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
         if(re.test(email) == false)
         {
            text = "Please Enter a Valid Email";
         } else {
            text="";
         }
         $('#emailwar').html(text);
    }


calculateAge = function(dateofbirth){
  try{
    var date2String = dateofbirth;
    var selectedDate = date2String.toString();
    var splitdate = selectedDate.split('-');
    var yearThen = parseInt(splitdate[2]);
    var monthThen = parseInt(splitdate[1]);
    var dayThen = parseInt(splitdate[0]);
    var birthday = new Date(yearThen, monthThen-1, dayThen);
    var datestring = $('#policy_start_date').val();
    var proposeddate = datestring.toString();
    var splitdate = proposeddate.split('-');
    var year = parseInt(splitdate[2]);
    var month = parseInt(splitdate[1]);
    var day = parseInt(splitdate[0]);
    var proposed = new Date(year, month-1, day);
    var differenceInMilisecond = proposed.valueOf() - birthday.valueOf();
    var years = Math.floor(differenceInMilisecond / (365.25 * 24 * 60 * 60 * 1000));
   // console.log(years);
    return years;

  } catch(Error){
    console.error(Error);
    console.log("Error Message IN date calculateSpouseAge"+Error.message);
  }
}

/*calculateAge = function(dateofbirth){
  try{
    var date2String = dateofbirth;
    var selectedDate = date2String.toString();
    var splitdate = selectedDate.split('-');
    var yearThen = parseInt(splitdate[2]);
    var monthThen = parseInt(splitdate[1]);
    var dayThen = parseInt(splitdate[0]);
    var birthday = new Date(yearThen, monthThen-1, dayThen);
    var datestring = $('#policy_start_date').val();
    var proposeddate = datestring.toString();
    var splitdate = proposeddate.split('-');
    var year = parseInt(splitdate[2]);
    var month = parseInt(splitdate[1]);
    var day = parseInt(splitdate[0]);
    var proposed = new Date(year, month-1, day);
    var differenceInMilisecond = proposed.valueOf() - birthday.valueOf();
    var years = Math.floor(differenceInMilisecond / (365.25 * 24 * 60 * 60 * 1000));
   // console.log(years);
    return years;

  } catch(Error){
    console.error(Error);
    console.log("Error Message IN date calculateSpouseAge"+Error.message);
  }
}*/




kavachi.directive('selfDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var ghaselfdob = calculateAge(birthDate);
          if(ghaselfdob < 18 || ghaselfdob >=66){
           $('#error-message-self').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-self').html('');
          }
        });
      }
    }
  });

kavachi.directive('spouseDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var spdate = _parentChange.val();
          var ghaspousedob = calculateAge(spdate);
          if(ghaspousedob < 18 || ghaspousedob >=66){
           $('#error-message-spouse').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-spouse').html('');
          }
        });
      }
    }
  });


kavachi.directive('motherDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var spdate = _parentChange.val();
          var motherdob = calculateAge(spdate);
          if(motherdob < 18 || motherdob >=66){
           $('#error-message-mother').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-mother').html('');
          }
        });
      }
    }
  });


kavachi.directive('motherInLawDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var spdate = _parentChange.val();
          var motherlawdob = calculateAge(spdate);
          if(motherlawdob < 18 || motherlawdob >=66){
           $('#error-message-mother-in-law').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-mother-in-law').html('');
          }
        });
      }
    }
  });

kavachi.directive('fatherDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var spdate = _parentChange.val();
          var fatherdob = calculateAge(spdate);
          if(fatherdob < 18 || fatherdob >=66){
           $('#error-message-father').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-father').html('');
          }
        });
      }
    }
  });


kavachi.directive('fatherInLawDob',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var spdate = _parentChange.val();
          var fatherinlawdob = calculateAge(spdate);
          if(fatherinlawdob < 18 || fatherinlawdob >=66){
           $('#error-message-father-in-law').html('').append('Please Enter DOB Between 18 to 65Years');
            return false;
          } else {
            $('#error-message-father-in-law').html('');
          }
        });
      }
    }
  });




kavachi.directive('ageChild1Calculate',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var child1 = calculateAge(birthDate);
          if(child1 >=26){
           $('#error-message-child1').html('').append('Please Enter DOB Below 25Years');
            return false;
          } else {
            $('#error-message-child1').html('');
          }
        });
      }
    }
  });


kavachi.directive('ageChild2Calculate',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var child1 = calculateAge(birthDate);
          if(child1 >=26){
           $('#error-message-child2').html('').append('Please Enter DOB Below 25Years');
            return false;
          } else {
            $('#error-message-child2').html('');
          }
        });
      }
    }
  });

kavachi.directive('ageChild3Calculate',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var child1 = calculateAge(birthDate);
          if(child1 >=26){
           $('#error-message-child3').html('').append('Please Enter DOB Below 25Years');
            return false;
          } else {
            $('#error-message-child3').html('');
          }
        });
      }
    }
  });

kavachi.directive('ageChild4Calculate',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var child1 = calculateAge(birthDate);
          if(child1 >=26){
           $('#error-message-child4').html('').append('Please Enter DOB Below 25Years');
            return false;
          } else {
            $('#error-message-child4').html('');
          }
        });
      }
    }
  });

kavachi.directive('ageChild5Calculate',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){
          var _parentChange = $(this);
          var birthDate = _parentChange.val();
          var child1 = calculateAge(birthDate);
          if(child1 >=26){
           $('#error-message-child5').html('').append('Please Enter DOB Below 25Years');
            return false;
          } else {
            $('#error-message-child5').html('');
          }
        });
      }
    }
  });

kavachi.directive('planValidation',function(){
    return{
      restrict : 'AE',
      link : function(scope,element,attr){
        element.on('change',function(){

           var plantype = $('#insured_plan_type').val();
            if(plantype == null){
              return false;
            }

             var includemother = $('input[name="include_mother"]:checked').val();
            if(includemother == '1'){
                var inmon = '1';
            }else{
              var inmon = '0';
            }

             var includefather = $('input[name="include_father"]:checked').val();
            if(includefather == '1'){

             var inmfat = '1';
            }else{
              var inmfat = '0';
            }

            var includeall = $('#include_children_all').val();


            var includeallfamilyf = $('#include_childrens_family').val();


            var includethree = $('#include_childrens3').val();


            if(plantype == 'Individual'){

              if(inmon == '0' & inmfat == '0' & includeall == '0'){
                  alert('Please Select Atleast One child or One Parent/Parent in Law');
                  $('#plan-error').html('').append('');
                   $('#plan-error').html('').append('Please Select Atleast One child or One Parent/Parent in Law');
                   $('#proceedbutton').hide();
                   return false;

              }else{
                 $('#plan-error').html('').append('');
                 $('#proceedbutton').show();
              }
            }else{

              if(inmon == '0' & inmfat == '0' & (includethree == '0')){
                  alert('Please Select Atleast One child or One Parent/Parent in Law');
                  $('#plan-error').html('').append('');
                  $('#plan-error').html('').append('Please Select Atleast One child or One Parent/Parent in Law');
                  $('#proceedbutton').hide();
                  return false;
              }else{
                  $('#plan-error').html('').append('');
                  $('#proceedbutton').show();
              }

            }
        });
      }
    }
  });


    kavachi.directive('getCities',function(){
  return {
    restrict : 'AE',
    link : function(scope,element,attr){
      element.on('change',function(){
        scope.getCitiesNames();
        return false;
      })
    },
    controller : function($scope,$http,$compile){

      $scope.getCitiesNames = function(){

        var state = $('#insured_state').val();
        if(state.length == null){
          return false;
        }
        var cityObject = new Object();
        cityObject.state = state;
        $http({
                url:pathname+'get_cities_names',
                method:'POST',
                dataType:'json',
                data:$.param(cityObject),
                headers: {"Content-Type": 'application/x-www-form-urlencoded'}
              }).then(function(result){
                var userData = Object(result);
                var dataLogin = userData.data;
                var citiesDiv='';
                if(dataLogin.status == true){
                var resultdata = dataLogin.result;
                $('#insured_district').val('');
                 citiesDiv  = '<option value="" disabled selected>Select your option</option>';
                resultdata.forEach(function(index,value){
                  citiesDiv += ' <option value="'+index.namecity+'">'+index.namecity+'</option>'
                });
                  $('#insured_district').html('').append(citiesDiv);
                } else {
                  $('#insured_district').html('');
                }

              });
        return false;

      }

    }
  }
});


kavachi.directive('getPremiumData',function(){
  return {
    restrict : 'AE',
    link : function(scope,element,attr){
      element.on('change',function(){
        scope.getKavachiPremium();
        return false;
      })
    },
    controller : function($scope,$http){
      $scope.getKavachiPremium = function(){
      try{
           var suminsured = $('#insured_suminsured').val();
           if(suminsured == null){ return false;}

            var plantype = $('#insured_plan_type').val();
           if(plantype == null){ return false;}


           var hospicash = $('#insured_hospi_cash').val();
           if(hospicash == null){ return false;}

           var tenure = $('#insured_tenure').val();
           if(tenure == null){ return false;}

            var selfdob = $('#insured_dob').val();
            var selfage = calculateAge(selfdob);
            if(selfage < 18 || selfage >66){ return false;}

            var spouseage = 0;

            var includespouse = $('#insured_spouse').val();
            if(includespouse == 'Yes')
            {
              var spouse_age = $('#spouse_dob').val();
              spouseage = calculateAge(spouse_age);
               if(spouseage < 18 || spouseage >66){ return false;}
            }

            var motherage = 0;
            var motherinlawage = 0;
            var fatherage = 0;
            var fatherinlawage = 0;


            var chilld1age = 0;
            var chilld2age = 0;
            var chilld3age = 0;
            var chilld4age = 0;
            var chilld5age = 0;

            var includemother = $('input[name="include_mother"]:checked').val() || '0';
            if(includemother == '1'){
                var moth = $('#include_mother_in_dob').val();
                motherage = calculateAge(moth);
            }

            var includemotherinlaw = $('input[name="include_mother_in_law"]:checked').val() || '0';
            if(includemotherinlaw == '1'){
                var motherinlaw = $('#include_mother_in_law_dob').val();
                motherinlawage = calculateAge(motherinlaw);
            }

            var includefather = $('input[name="include_father"]:checked').val() || '0';
            if(includefather == '1'){
                var fatger = $('#include_father_in_dob').val();
                fatherage = calculateAge(fatger);
            }

         var includefatherinlaw = $('input[name="include_father_in_law"]:checked').val() || '0';
            if(includefatherinlaw == '1'){
                var fatgerinlaw = $('#include_father_in_law_dob').val();
                fatherinlawage = calculateAge(fatgerinlaw);
            }


        var childnum = parseInt($('#include_children_all').val());
        if(childnum >0){
            for (var i = 1; i<=childnum ; i++) {
                var ddoobb = $('#child'+i+'_dob').val();
                var validach1 = calculateAge(ddoobb);
                 if(validach1 >=26){
                      i=7;
                    $('#error-message-child'+i).html('').append('Please Enter DOB Below 25Years');
                     return false;

                   }
            }
        }


            if(childnum > 0){
                var child1 = $('#child1_dob').val();
                chilld1age = calculateAge(child1);
            }

            if(childnum > 1){
                var child2 = $('#child2_dob').val();
                chilld2age = calculateAge(child2);
            }

            if(childnum > 2){
                var child3 = $('#child3_dob').val();
                chilld3age = calculateAge(child3);
            }

            if(childnum > 3){
                var child4 = $('#child4_dob').val();
                chilld4age = calculateAge(child4);
            }

            if(childnum > 4){
                var child5 = $('#child5_dob').val();
                chilld5age = calculateAge(child5);
            }

            var havehealthcard = $('#healthcard').val();
             if(havehealthcard == null){ return false;}



        var premObject = new Object();
        premObject.suminsured = Base64.encode(suminsured);
        premObject.hospicash = Base64.encode(hospicash);
        premObject.tenure = Base64.encode(tenure);
         premObject.selfage = selfage;
        premObject.spouseage = spouseage;
        premObject.motherage = motherage;
        premObject.motherinlawage = motherinlawage;
        premObject.fatherage = fatherage;
        premObject.fatherinlawage = fatherinlawage;
        premObject.chilld1age = chilld1age;
        premObject.chilld2age = chilld2age;
        premObject.chilld3age = chilld3age;
        premObject.chilld4age = chilld4age;
        premObject.chilld5age = chilld5age;
        premObject.plantype = plantype;
        premObject.healthcard = havehealthcard;
        premObject.childcount = childnum



        $http({
                url:pathname+'get_kavach_premium',
                method:'POST',
                dataType:'json',
                data:$.param(premObject),
                headers: {"Content-Type": 'application/x-www-form-urlencoded'}
              }).then(function(result){
                var userData = Object(result);
                var dataPost = userData.data;
                if(dataPost.status == true){
                  $('#insured_premium').val('Rs. '+dataPost.premium);
                } else{
                   alert('Premium Not Available');
                }

              });
        return false;
      }
      catch(Error){
          //console.error(Error);
          console.log("Error Message IN Calculating Premium"+Error.message);
        }
}
      }
  }
});


    function email_valid(email){
        var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
         if(re.test(email) == false)
         {
            return false;
         } else {
           return true;
         }
    }


kavachi.directive('coronaKavachiEnrollForm',function(){
  return {
    restrict : 'AE',
    link : function(scope,element,attr){
      element.on('submit',function(){
        scope.submitenrollmentdata();
        return false;
      })
    },
    controller : function($scope,$http){
      $scope.submitenrollmentdata = function(){

       var kavachcorona = $scope.quote_form.$valid;
         if(kavachcorona == false){
           alert('Please Fill All Mandatory Details');
           return false;
        }


        var childnum = parseInt($('#include_children_all').val());
        if(childnum >0){
            for (var i = 1; i<=childnum ; i++) {
                var ddoobb = $('#child'+i+'_dob').val();
                var validach1 = calculateAge(ddoobb);
                 if(validach1 >=26){
                      i=7;
                    $('#error-message-child'+i).html('').append('Please Enter DOB Below 25Years');
                     return false;

                   }
            }
        }

        var premium = $('#insured_premium').val();
           if(premium.length == 0){
            return false;
          }

         var pinc = $('#insured_pincode').val();
           if(pinc.length != 6){
            alert('Please enter a valid pincode');
            return false;
          }

/*         var firstname = $('#insured_first_name').val();
          var valida1 = restrictNumbers(firstname);
          if(valida1 ==  false){
            alert('Please Enter First Name With Alphabets');
          }

         var middlename = $('#insured_middle_name').val();
          var valida2 = restrictNumbers(middlename);
          if(valida2 ==  false){
            alert('Please Enter Middle Name With Alphabets');
          }

          var lastname = $('#insured_last_name').val();
          var valida3 = restrictNumbers(lastname);
          if(valida3 ==  false){
            alert('Please Enter Last Name With Alphabets');
          }

          var city = $('#insured_city').val();
          var valida4 = restrictNumbers(city);
          if(valida4 ==  false){
            alert('Please Enter City With Alphabets');
          }

          var contact = $('#insured_contact_number').val();
          var valida5 = restrictAlphabets(contact);
          if(valida5 ==  false){
            alert('Please Enter a valid Contact Number');
          }

          var mobile = $('#insured_mobile_number').val();
          var valida6 = restrictAlphabets(mobile);
          if(valida6 ==  false){
            alert('Please Enter a Valid Mobile Number');
          }

          var email = $('#insured_mail_id').val();
          var valida7 = email_valid(email);
          if(valida7 ==  false){
            alert('Please Enter a Valid Email Id');
          }
*/

         var dob =  $('#insured_dob').val();
         var dobofselfvali= calculateAge(dob);
          if(dobofselfvali < 18 || dobofselfvali >= 66){
            return false;
          }

          var plann = $('#insured_plan_type').val();
          if(plann == 'Family floater')
          {
            var spouse_age = $('#spouse_dob').val();
            age2 = calculateAge(spouse_age);
              if(age2 < 18 || age2 >= 66){
                    return false;
              }
          }

          var includemother = $('input[name="include_mother"]:checked').val();
            if(includemother == '1'){
                var moth = $('#include_mother_in_dob').val();
                age3 = calculateAge(moth);
                 if(age3 < 18 || age3 >= 66){
                    return false;
                 }
            }

             var includefather = $('input[name="include_father"]:checked').val();
            if(includefather == '1'){
                var fatger = $('#include_father_in_dob').val();
                age4 = calculateAge(fatger);
                if(age4 < 18 || age4 >= 66){
                    return false;
                 }
            }

             $('#proceedbutton').hide();
             $('#pleasewaitButton').show();

             var postObject = $('#quote_form').serializeArray();
             var quoteFormData = new Object();
             $.each(postObject,function(index,value){
              quoteFormData[value.name] = Base64.encode(value.value);
             });
             $http({
                url:pathname+'kavachi_enrollpage_submit',
                method:'POST',
                dataType:'json',
                data:$.param(quoteFormData),
                headers: {"Content-Type": 'application/x-www-form-urlencoded'}
              }).then(function(result){
                var userData = Object(result);
                var dataPost = userData.data;
                if(dataPost.status == true){
                  window.open(pathname+'proposal','_self');
                }else{
                  alert(dataPost.message);
                  $('#proceedbutton').show();
                  $('#pleasewaitButton').hide();
                }

                return false;
              });
      }
    }
  }
});






