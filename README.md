# Fast validators
A lib for validations in forms or not

Any contribution or issues is welcome!




## Validate
```
  const result = Validate({config})
                    .set({f:firstValidator, value, refs })
                    .set({f:secondValidator, value, refs })
                    .set({f:nValidator, value, refs })
                    .get()
```

### set

This set the validator which will be use
 > ref - like a id for identify where your proccess is broken
 > 
 > value - the value that will be verify
 > 
 > f - any validator you want, we provide some. If you want create your own, see **Personalized Validators**
 
  
### get

  Give you the result of validation
  Warning-> if you dont put that the validation never be ended
  
### result

  Validate return an array of objects like:
  ```
    { result: boolean, msg:string, refs: string}
  ```
  > ref - like a id for identify where your proccess is broken
 > 
 > result - result of validation
 > 
 > msg - message of error, can be personalized, see **Config**
 
  
## ValidateForm
It can add an message of error below input
```
  const result = ValidateForm({config})
                    .set({f:firstValidator, value, refs: elementOne })
                    .set({f:secondValidator, value, refs: elementTwo })
                    .set({f:nValidator, value, refs: elementN })
                    .get()
```

 ### set

This set the validator which will be use
 > refs - must be a element
 > 
 > value - the value that will be verify
 > 
 > f - any validator you want, we provide some. If you want create your own, see **Personalized Validators**
 
  
### get

  Give you the result of validation
  Warning-> if you dont put that the validation never be ended
  
### result

  ValidateForm return a boolean which say if has any error(true) or not(false) :

### Match

### MatchReturn

### Validators

### Personalized Validators

### Config


