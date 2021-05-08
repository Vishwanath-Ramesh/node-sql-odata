import { Edm } from "odata-v4-server";

class OptionSet {
  @Edm.Key
  @Edm.String
  Id;

  @Edm.String
  Entity;

  @Edm.String
  Name;

  @Edm.String
  DisplayName;

  @Edm.String
  Description;

  @Edm.String
  DataType;

  @Edm.String
  Required;

  @Edm.String
  MaxLength;

  @Edm.String
  ValidationRule;

  @Edm.String
  LookUp;

  @Edm.String
  OptionSet;

  @Edm.String
  Option1;

  @Edm.String
  Option2;
}

export default OptionSet;
