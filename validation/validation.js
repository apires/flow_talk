//@flow

declare opaque type tValidated;
declare opaque type tDirty;

opaque type ID = string;

declare var db: {| +write: (data: string) => mixed |};

type tFormData = {|
  id: ID,
  name: ?string,
|};

type tForm<T: tValidated | tDirty> = tFormData;

function createForm(): tForm<tDirty>{
  return {
    id: "some-uuid-thing",
    name: null,
  };
}

function writeToDatabase(form: tForm<tValidated>): void {
  const payload = JSON.stringify(form);
  db.write(payload);
}

// X means the function can throw an Xception.
function validateFunctionX(form: tForm<tDirty>): tForm<tValidated> {
  if(form.name == null){
    throw new Error("Invalid Name");
  }

  return (form: tFormData);
}

function doSomething(): void {
  const form = createForm();

  // Won't work, form hasn't been validated
  writeToDatabase(form);

  // const validatedForm = validateFunctionX(form);
  // writeToDatabase(validatedForm);
}
