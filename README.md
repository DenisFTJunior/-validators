# Fast validators
A lib for validations in forms or not

Any contribution or issues is welcome!

## Methods


### Validate
```
  const result = Validate({config})
                    .set({f:firstValidator, value, refs })
                    .set({f:secondValidator, value, refs })
                    .set({f:nValidator, value, refs })
                    .get()
```

**set**

This set the validator which will be use
 > ref - like a id for identify where your proccess is broken
 > 
 > value - the value that will be verify
 > 
 > f - any validator you want, we provide some. If you want create your own, see **Personalized Validators**
 
  
**get**

  Give you the result of validation
  
**result**

  Validate return an array of objects like:
  ```
    { result: boolean, msg:string, refs: string}
  ```
  > ref - like a id for identify where your proccess is broken
 > 
 > result - result of validation
 > 
 > msg - message of error, can be personalized, see **Config**
 
  

  
### ValidateForm

### Match

### MatchReturn

### Validators

### Personalized Validators

### Config


