const { odata, ODataServer } = require("odata-v4-server");

import EntityController from "./controller/EntityController";
import OptionSetController from "./controller/OptionSetController";

@odata.namespace("My")
@odata.controller(EntityController, true)
@odata.controller(OptionSetController, true)
class MyODataServer extends ODataServer {}

export default MyODataServer;
