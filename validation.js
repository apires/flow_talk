//@flow

declare class Validated {};
declare class Dirty {};

opaque type ID = string;

declare var db: {| +write: (data: string) => mixed |};

type Form<T: Dirty | Validated> = {|
  id: ID,
  name: ?string,
|};

function createForm(): Form<Dirty>{
  return {
    id: "some-uuid-thing",
    name: null,
  };
}

function writeToDatabase(form: Form<Validated>): void {
  const payload = JSON.stringify(form);
  db.write(payload);
}

function validateFunctionX(form: Form<Dirty>): Form<Validated> {
  if(form.name == null){
    throw new Error("Invalid Name");
  }

  return {...form};
}

function doSomething(): void {
  const form = createForm();

  // Won't work, form hasn't been validated
  // writeToDatabase(form);

  const validatedForm = validateFunctionX(form);
  writeToDatabase(validatedForm);
}
