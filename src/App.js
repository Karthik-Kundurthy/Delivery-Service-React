import {
  Button,
  // EditableText,
  InputGroup,
  Toaster,
  Position,
} from "@blueprintjs/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
 const AppToaster = Toaster.create({
  position: Position.TOP,
});
 function App() {
  // const [employees, setEmployees] = useState([]);
  // const [departments, setDepartments] = useState([]);
  // const [newName, setNewName] = useState("");
  // const [newDepartment, setNewDepartment] = useState("");
  // const [newAddress, setNewAddress] = useState("");





   /**
   * State variable used in updating the views
   */
  const [ingredients, setIngredients] = useState([]);
  const [delivery_service, setService] = useState([]);
  const [owners, setOwner] = useState([]);
  const [employees, setEmployee] = useState([]);
  const [pilots, setPilot] = useState([]);
  const [locations, setLocation] = useState([]);
   /**
   * State variables used in updating the add drone method
   */

  // add_drone()
  const [drone_id, set_drone_ID] = useState("");
  const [tag, setTag] = useState("");
  const [barcode, setBarcode] = useState("");
  const [packages, setPackages] = useState("");
  const [price, setPrice] = useState("");
   // add_owner()
  const [owner_username, setOwnerUsername] = useState("");
  const [owner_fname, setOwnerFname] = useState("");
  const [owner_lname, setOwnerLname] = useState("");
  const [owner_address, setOwnerAddress] = useState("");
  const [owner_bdate, setOwnerBdate] = useState("");

  // add_employee()
  const [employee_username, setEmployeeUsername] = useState("");
  const [employee_fname, setEmployeeFname] = useState("");
  const [employee_lname, setEmployeeLname] = useState("");
  const [employee_address, setEmployeeAddress] = useState("");
  const [employee_bdate, setEmployeeBdate] = useState("");
  const [employee_taxID, setEmployeeTaxID] = useState("");
  const [employee_hired, setEmployeeHired] = useState("");
  const [employee_experience, setEmployeeExperience] = useState("");
  const [employee_salary, setEmployeeSalary] = useState("");
   // add_pilot_role()
  const [pilot_username, setPilotUsername] = useState("");
  const [pilot_licenseID, setPilotLicenseID] = useState("");
  const [pilot_experience, setPilotExperience] = useState("");

  // add_worker_role()
   const [worker_username, setWorkerUsername] = useState("");

  // add_ingredient()
  const [ingredient_barcode, setIngredientBarcode] = useState("");
  const [ingredient_iname, setIngredientIname] = useState("");
  const [ingredient_weight, setIngredientWeight] = useState("");
   // add_restaurant()
  const [rest_name, setRestName] = useState("");
  const [rest_rating, setRestRating] = useState("");
  const [rest_spent, setRestSpent] = useState("");
  const [rest_location, setRestLocation] = useState("");
  const [rest_fundedBy, setRestFundedBy] = useState("");

  // add_service()
  const [service_id, setServiceID] = useState("");
  const [service_name, setServiceName] = useState("");
  const [service_home_base, setServiceHomeBase] = useState("");
  const [service_manager, setServiceManager] = useState("");

  // add_location()
  const [location_label, setLocLabel] = useState("");
  const [location_x, setLocX] = useState("");
  const [location_y, setLocY] = useState("");
  const [location_space, setLocSpace] = useState("");
   // add_owner()
  const [start_funding_owner, setStartFundingOwner] = useState("");
  const [start_funding_long_name, setStartFundingLongName] = useState("");
   // hire_employee()
  const [hire_employee_username, setHireEmployeeUsername] = useState("");
  const [hire_employee_id, setHireEmployeeID] = useState("");
   // fire_employee()
  const [fire_employee_username, setFireEmployeeUsername] = useState("");
  const [fire_employee_id, setFireEmployeeID] = useState("");
   // manage_service()
  const [manage_service_username, setManageServiceUsername] = useState("");
  const [manage_service_ID, setManageServiceID] = useState("");
   // takeover_drone()
  const [takeover_drone_username, setTakeoverUsername] = useState("");
  const [takeover_drone_ID, setTakeoverID] = useState("");
  const [takeover_drone_tag, setTakeoverTag] = useState("");
   // join_swarm()
  const [join_swarm_id, setJoinSwarmID] = useState("");
  const [join_swarm_tag, setJoinSwarmTag] = useState("");
  const [join_swarm_leader_tag, setJoinSwarmLeaderTag] = useState("");
   // leave_swarm()
  const [leave_swarm_id, setLeaveSwarmID] = useState("");
  const [leave_swarm_tag, setLeaveSwarmTag] = useState("");
   // load_drone()
  const [load_drone_id, setLoadDroneID] = useState("");
  const [load_drone_tag, setLoadDroneTag] = useState("");
  const [load_drone_barcode, setLoadDroneBarcode] = useState("");
  const [load_drone_more_packages, setLoadDroneMorePackages] = useState("");
  const [load_drone_price, setLoadDronePrice] = useState("");
   // refuel_drone()
  const [refuel_drone_id, setRefuelDroneID] = useState("");
  const [refuel_drone_tag, setRefuelDroneTag] = useState("");
  const [refuel_drone_more_fuel, setRefuelDroneMoreFuel] = useState("");

  // fuel_required()
  const [fuel_required_departure, setFuelRequiredDeparture] = useState("");
  const [fuel_required_arrival, setFuelRequiredArrival] = useState("");

  // fly_drone()
  const [fly_drone_id, setFlyDroneID] = useState("");
  const [fly_drone_tag, setFlyDroneTag] = useState("");
  const [fly_drone_destination, setFlyDroneDestination] = useState("");

  // purchase_ingredient()
  const [purchase_ing_long_name, setPurchaseIngLongName] = useState("");
  const [purchase_ing_id, setPurchaseIngID] = useState("");
  const [purchase_ing_tag, setPurchaseIngTag] = useState("");
  const [purchase_ing_barcode, setPurchaseIngBarcode] = useState("");
  const [purchase_ing_quantity, setPurchaseIngQuantity] = useState("");

  // remove_ingredient()
  const [remove_ing_barcode, setRemoveIngBarcode] = useState("");

  // remove_drone()
  const [remove_drone_id, setRemoveDroneID] = useState("");
  const [remove_drone_tag, setRemoveDroneTag] = useState("");

  // remove_pilot_role()
  const [remove_pilot_username, setRemovePilotUsername] = useState("");

   // const [delivery_services, setService] = useState([]);
  // const [id, setID, delivery_service] = useState("");
   // const [location, setLocation] = useState("");
  // const [amount, setAmount] = useState("");
  // const [lowPrice, setLowPrice] = useState("");
  // const [highPrice, setHighPrice] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/").then((response) => {
      const { data } = response;
      setIngredients(data.result);
    });
  }, [setIngredients]);



   useEffect(() => {
    axios.get("http://localhost:3000/services/").then((response) => {
      const { data } = response;
      console.log(data.result);
      setService(data.result);
    });
   }, [setService]);

   useEffect(() => {
    axios.get("http://localhost:3000/services/owners/").then((response) => {
      const { data } = response;
      console.log(data.result);
      setOwner(data.result);
    });
   }, [setOwner]);

   useEffect(() => {
    axios.get("http://localhost:3000/services/owners/employees").then((response) => {
      const { data } = response;
      setEmployee(data.result);
    });
  }, [setEmployee]);

  useEffect(() => {
    axios.get("http://localhost:3000/services/owners/employees/pilots").then((response) => {
      const { data } = response;
      setPilot(data.result);
    });
  }, [setPilot]);

  useEffect(() => {
    axios.get("http://localhost:3000/services/owners/employees/pilots/locations").then((response) => {
      const { data } = response;
      setLocation(data.result);
    });
  }, [setLocation]);

  useEffect(() => {
    axios.get("http://localhost:3000/services/owners/employees/pilots/locations").then((response) => {
      const { data } = response;
      setLocation(data.result);
    });
  }, [setRemovePilotUsername]);


   //---------------------------------------------------------------------------------------------------
  // add_drone()
  //---------------------------------------------------------------------------------------------------
   const addDrone = () => {
      // console.log("Adding drone right now -- client");
      // console.log(drone_id);
      // console.log(tag);
      // console.log(barcode);
      // console.log(packages);
      // console.log(price);
      axios
        .post("http://localhost:3000/", {
          drone_id,
          tag,
          barcode,
          packages,
          price
        })
        .then((response) => {
          // window.location.reload();
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          set_drone_ID("");
          setTag("");
          setBarcode("");
          setPackages("");
          setPrice("");
        });
        window.location.reload();
   }
   //---------------------------------------------------------------------------------------------------
   // add_owner()
   //---------------------------------------------------------------------------------------------------
   const addOwner = () => {
    axios
      .post("http://localhost:3000/services/owners", {
        owner_username,
        owner_fname,
        owner_lname,
        owner_address,
        owner_bdate
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        // setIngredients([...ingredients, data.result]);
        // setService([...delivery_service, data.result]);

        setOwnerUsername("");
        setOwnerFname("");
        setOwnerLname("");
        setOwnerAddress("");
        setOwnerBdate("");

      });
      window.location.reload();
  }

  //---------------------------------------------------------------------------------------------------
  // add_employee()
  //---------------------------------------------------------------------------------------------------
   const addEmployee = () => {
    axios
      .post("http://localhost:3000/services/owners/employees", {
        employee_username,
        employee_fname,
        employee_lname,
        employee_address,
        employee_bdate,
        employee_taxID,
        employee_hired,
        employee_experience,
        employee_salary
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        // setIngredients([...ingredients, data.result]);
        // setService([...delivery_service, data.result]);
        setEmployeeUsername("");
        setEmployeeFname("");
        setEmployeeLname("");
        setEmployeeAddress("");
        setEmployeeBdate("");
        setEmployeeTaxID("");
        setEmployeeHired("");
        setEmployeeExperience("");
        setEmployeeSalary("");
      });
    window.location.reload();
  }

  //---------------------------------------------------------------------------------------------------
  // add_pilot_role()
  //---------------------------------------------------------------------------------------------------
   const addPilot = () => {
    axios
      .put("http://localhost:3000/services/owners/employees/pilots", {
        pilot_username,
        pilot_licenseID,
        pilot_experience
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        // setIngredients([...ingredients, data.result]);
        // setService([...delivery_service, data.result]);
        setPilotUsername("");
        setPilotLicenseID("");
      });
    window.location.reload();
  }

  //---------------------------------------------------------------------------------------------------
  // add_worker_role()
  //---------------------------------------------------------------------------------------------------
   const addWorker = () => {
    axios
      .put("http://localhost:3000/", {
        worker_username
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        // setIngredients([...ingredients, data.result]);
        // setService([...delivery_service, data.result]);
        setWorkerUsername("");
      });
    window.location.reload();
  }

  //---------------------------------------------------------------------------------------------------
  // add_ingredient()
  //---------------------------------------------------------------------------------------------------
   const addIngredient = () => {
    axios
      .put("http://localhost:3000/", {
        ingredient_barcode,
        ingredient_iname,
        ingredient_weight
      })
      .then((response) => {
        const { data } = response;
        console.log(data);
        // setIngredients([...ingredients, data.result]);
        // setService([...delivery_service, data.result]);
        setIngredientBarcode("");
        setIngredientIname("");
        setIngredientWeight("");
      });
    window.location.reload();
  }
   //---------------------------------------------------------------------------------------------------
  // add_restaurant()
  //---------------------------------------------------------------------------------------------------
  const addRestaurant = () => {
      axios
        .put("http://localhost:3000/", {
          rest_name,
          rest_rating,
          rest_spent,
          rest_location,
          rest_fundedBy
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setRestName("");
          setRestRating("");
          setRestSpent("");
          setRestLocation("");
          setRestFundedBy("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // add_service()
  //---------------------------------------------------------------------------------------------------
    const addDeliveryService = () => {
      axios
        .post("http://localhost:3000/services", {
          service_id,
          service_name,
          service_home_base,
          service_manager
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setServiceID("");
          setServiceName("");
          setServiceHomeBase("");
          setServiceManager("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // add_location()
  //---------------------------------------------------------------------------------------------------
    const addLocation = () => {
      axios
        .put("http://localhost:3000/", {
          location_label,
          location_x,
          location_y,
          location_space
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setLocLabel("");
          setLocX("");
          setLocY("");
          setLocSpace("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // start_funding()
  //---------------------------------------------------------------------------------------------------
    const addStartFunding = () => {
      axios
        .put("http://localhost:3000/", {
          start_funding_owner,
          start_funding_long_name
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setStartFundingOwner("");
          setStartFundingLongName("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // hire_employee()
  //---------------------------------------------------------------------------------------------------
    const addHireEmployee = () => {
      axios
        .put("http://localhost:3000/", {
          hire_employee_username,
          hire_employee_id
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setHireEmployeeUsername("");
          setHireEmployeeID("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // fire_employee()
  //---------------------------------------------------------------------------------------------------
    const addFireEmployee = () => {
      axios
        .put("http://localhost:3000/", {
          fire_employee_username,
          fire_employee_id
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setFireEmployeeUsername("");
          setFireEmployeeID("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // manage_service()
  //---------------------------------------------------------------------------------------------------
    const addManageService = () => {
      axios
        .put("http://localhost:3000/service", {
          manage_service_username,
          manage_service_ID
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setManageServiceUsername("");
          setManageServiceID("");
        });
      window.location.reload();
    }
  //---------------------------------------------------------------------------------------------------
  // takeover_drone()
  //---------------------------------------------------------------------------------------------------
    const addTakeoverDrone = () => {
      axios
        .put("http://localhost:3000/", {
          takeover_drone_username,
          takeover_drone_ID,
          takeover_drone_tag
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setTakeoverUsername("");
          setTakeoverID("");
          setTakeoverTag("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// join_swarm()
//---------------------------------------------------------------------------------------------------
    const addJoinSwarm = () => {
      axios
        .put("http://localhost:3000/", {
          join_swarm_id,
          join_swarm_tag,
          join_swarm_leader_tag
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setJoinSwarmID("");
          setJoinSwarmTag("");
          setJoinSwarmLeaderTag("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// leave_swarm()
//---------------------------------------------------------------------------------------------------
    const addLeaveSwarm = () => {
      axios
        .put("http://localhost:3000/", {
          leave_swarm_id,
          leave_swarm_tag,
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setLeaveSwarmID("");
          setLeaveSwarmTag("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// load_drone()
//---------------------------------------------------------------------------------------------------
    const addLoadDrone = () => {
      axios
        .put("http://localhost:3000/", {
          load_drone_id,
          load_drone_tag,
          load_drone_barcode,
          load_drone_more_packages,
          load_drone_price
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setLoadDroneID("");
          setLoadDroneTag("");
          setLoadDroneBarcode("");
          setLoadDroneMorePackages("");
          setLoadDronePrice("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// refuel_drone()
//---------------------------------------------------------------------------------------------------
    const addRefuelDrone = () => {
      axios
        .put("http://localhost:3000/", {
          refuel_drone_id,
          refuel_drone_tag,
          refuel_drone_more_fuel
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setRefuelDroneID("");
          setRefuelDroneTag("");
          setRefuelDroneMoreFuel("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// fuel_required()
//---------------------------------------------------------------------------------------------------
    const addFuelRequired = () => {
      axios
        .put("http://localhost:3000/", {
          fuel_required_departure,
          fuel_required_arrival
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setFuelRequiredDeparture("");
          setFuelRequiredArrival("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// fly_drone()
//---------------------------------------------------------------------------------------------------
    const addFlyDrone = () => {
      axios
        .put("http://localhost:3000/", {
          fly_drone_id,
          fly_drone_tag,
          fly_drone_destination
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setFlyDroneID("");
          setFlyDroneTag("");
          setFlyDroneDestination("");

        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// purchase_ingredient()
//---------------------------------------------------------------------------------------------------
    const addPurchaseIngredient = () => {
      axios
        .put("http://localhost:3000/", {
          purchase_ing_long_name,
          purchase_ing_id,
          purchase_ing_tag,
          purchase_ing_barcode,
          purchase_ing_quantity
        })
        .then((response) => {
          const { data } = response;
          console.log(data);
          // setIngredients([...ingredients, data.result]);
          // setService([...delivery_service, data.result]);
          setPurchaseIngLongName("");
          setPurchaseIngID("");
          setPurchaseIngTag("");
          setPurchaseIngBarcode("");
          setPurchaseIngQuantity("");
        });
      window.location.reload();
    }
//---------------------------------------------------------------------------------------------------
// remove_ingredient()
//---------------------------------------------------------------------------------------------------
const addRemoveIngredient = () => {
  axios
    .put("http://localhost:3000/", {
      remove_ing_barcode
    })
    .then((response) => {
      const { data } = response;
      console.log(data);
      // setIngredients([...ingredients, data.result]);
      // setService([...delivery_service, data.result]);
      setRemoveIngBarcode("");
    });
  window.location.reload();
}
//---------------------------------------------------------------------------------------------------
// remove_drone()
//---------------------------------------------------------------------------------------------------
const addRemoveDrone = () => {
  axios
    .put("http://localhost:3000/", {
      remove_drone_id,
      remove_drone_tag
    })
    .then((response) => {
      const { data } = response;
      console.log(data);
      // setIngredients([...ingredients, data.result]);
      // setService([...delivery_service, data.result]);
      setRemoveDroneID("");
      setRemoveDroneTag("");
    });
  window.location.reload();
}
//---------------------------------------------------------------------------------------------------
// remove_pilot_role()
//---------------------------------------------------------------------------------------------------
const addRemovePilot = () => {
  axios
    .delete("http://localhost:3000/services/owners/employees/pilots/", {
      remove_pilot_username
    })
    .then((response) => {
      const { data } = response;
      console.log(data);
      // setIngredients([...ingredients, data.result]);
      // setService([...delivery_service, data.result]);
      setRemovePilotUsername("");
    });
  window.location.reload();
}

   return (
    <div className="App">
      <td>
              <InputGroup
                placeholder="barcode"
                value={barcode}
                onChange={(e) => {
                  setBarcode(e.target.value)
                }}
              />
              <InputGroup
                placeholder="drone_id"
                value={drone_id}
                onChange={(e) => {
                  set_drone_ID(e.target.value)
                }}
              />
              <InputGroup
                placeholder="tag"
                value={tag}
                onChange={(e) => {
                  setTag(e.target.value)
                }}
              />
             <InputGroup
                placeholder="packages"
                value={packages}
                onChange={(e) => {
                  setPackages(e.target.value)
                }}
              />
            <InputGroup
                placeholder="price"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
              />
              <Button intent="success" onClick={() => addDrone()}>
                Add Drone
              </Button>

              <br>
              </br>
              <br>
              </br>

                 {/* add owner */}
              <InputGroup
                placeholder="username"
                value={owner_username}
                onChange={(e) => {
                  setOwnerUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="first_name"
                value={owner_fname}
                onChange={(e) => {
                  setOwnerFname(e.target.value)
                }}
              />
               <InputGroup
                placeholder="last_name"
                value={owner_lname}
                onChange={(e) => {
                  setOwnerLname(e.target.value)
                }}
              />
               <InputGroup
                placeholder="address"
                value={owner_address}
                onChange={(e) => {
                  setOwnerAddress(e.target.value)
                }}
              />
               <InputGroup
                placeholder="birthdate"
                value={owner_bdate}
                onChange={(e) => {
                  setOwnerBdate(e.target.value)
                }}
              />
                <Button intent="success" onClick={addOwner}>
                Add Owner
              </Button>
               </td>

              <td>


              <InputGroup
                placeholder="username"
                value={employee_username}
                onChange={(e) => {
                  setEmployeeUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="first_name"
                value={employee_fname}
                onChange={(e) => {
                  setEmployeeFname(e.target.value)
                }}
              />
               <InputGroup
                placeholder="last_name"
                value={employee_lname}
                onChange={(e) => {
                  setEmployeeLname(e.target.value)
                }}
              />
               <InputGroup
                placeholder="address"
                value={employee_address}
                onChange={(e) => {
                  setEmployeeAddress(e.target.value)
                }}
              />
               <InputGroup
                placeholder="birthdate"
                value={employee_bdate}
                onChange={(e) => {
                  setEmployeeBdate(e.target.value)
                }}
              />
              <InputGroup
                placeholder="taxID"
                value={employee_taxID}
                onChange={(e) => {
                  setEmployeeTaxID(e.target.value)
                }}
              />
              <InputGroup
                placeholder="hired"
                value={employee_hired}
                onChange={(e) => {
                  setEmployeeHired(e.target.value)
                }}
              />
              <InputGroup
                placeholder="experience"
                value={employee_experience}
                onChange={(e) => {
                  setEmployeeExperience(e.target.value)
                }}
              />
              <InputGroup
                placeholder="salary"
                value={employee_salary}
                onChange={(e) => {
                  setEmployeeSalary(e.target.value)
                }}
              />

                <Button intent="success" onClick={addEmployee}>
                Add Employee

              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="username"
                value={pilot_username}
                onChange={(e) => {
                  setPilotUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="licenseID"
                value={pilot_licenseID}
                onChange={(e) => {
                  setPilotLicenseID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="experience"
                value={pilot_experience}
                onChange={(e) => {
                  setPilotExperience(e.target.value)
                }}
              />
               <Button intent="success" onClick={addPilot}>
                Add Pilot
              </Button>
               </td>
              <td>
               </td>
              <td>
               <InputGroup
                placeholder="barcode"
                value={ingredient_barcode}
                onChange={(e) => {
                  setIngredientBarcode(e.target.value)
                }}
              />
               <InputGroup
                placeholder="iname"
                value={ingredient_iname}
                onChange={(e) => {
                  setIngredientIname(e.target.value)
                }}
              />
               <InputGroup
                placeholder="weight"
                value={ingredient_weight}
                onChange={(e) => {
                  setIngredientWeight(e.target.value)
                }}
              />
               <Button intent="success" onClick={addIngredient}>
                Add Ingredient
              </Button>

              <br>
              </br>
              <br>
              </br>
              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="username"
                value={worker_username}
                onChange={(e) => {
                  setWorkerUsername(e.target.value)
                }}
              />
               <Button intent="success" onClick={addWorker}>
                Add Worker
              </Button>
               </td>
              <td>
               </td>
              <td>

              <InputGroup
                placeholder="long_name"
                value={rest_name}
                onChange={(e) => {
                  setRestName(e.target.value)
                }}
              />
               <InputGroup
                placeholder="rating"
                value={rest_rating}
                onChange={(e) => {
                  setRestRating(e.target.value)
                }}
              />
               <InputGroup
                placeholder="spent"
                value={rest_spent}
                onChange={(e) => {
                  setRestSpent(e.target.value)
                }}
              />
               <InputGroup
                placeholder="location"
                value={rest_location}
                onChange={(e) => {
                  setRestLocation(e.target.value)
                }}
              />
              <InputGroup
                placeholder="funded_by"
                value={rest_fundedBy}
                onChange={(e) => {
                  setRestFundedBy(e.target.value)
                }}
              />
               <Button intent="success" onClick={addRestaurant}>
                Add Restaurant
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="id"
                value={service_id}
                onChange={(e) => {
                  setServiceID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="long_name"
                value={service_name}
                onChange={(e) => {
                  setServiceName(e.target.value)
                }}
              />
               <InputGroup
                placeholder="home_base"
                value={service_home_base}
                onChange={(e) => {
                  setServiceHomeBase(e.target.value)
                }}
              />
               <InputGroup
                placeholder="manager"
                value={service_manager}
                onChange={(e) => {
                  setServiceManager(e.target.value)
                }}
              />
               <Button intent="success" onClick={addDeliveryService}>
                Add Delivery Service
              </Button>

              </td>
              <td>
               </td>
              <td>

              <InputGroup
                placeholder="label"
                value={location_label}
                onChange={(e) => {
                  setLocLabel(e.target.value)
                }}
              />
               <InputGroup
                placeholder="x_coord"
                value={location_x}
                onChange={(e) => {
                  setLocX(e.target.value)
                }}
              />
               <InputGroup
                placeholder="y_coord"
                value={location_y}
                onChange={(e) => {
                  setLocY(e.target.value)
                }}
              />
               <InputGroup
                placeholder="space"
                value={location_space}
                onChange={(e) => {
                  setLocSpace(e.target.value)
                }}
              />
               <Button intent="success" onClick={addLocation}>
                Add Location
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="owner"
                value={start_funding_owner}
                onChange={(e) => {
                  setStartFundingOwner(e.target.value)
                }}
              />
               <InputGroup
                placeholder="long_name"
                value={start_funding_long_name}
                onChange={(e) => {
                  setStartFundingLongName(e.target.value)
                }}
              />
               <Button intent="success" onClick={addStartFunding}>
                Start Funding
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="username"
                value={hire_employee_username}
                onChange={(e) => {
                  setHireEmployeeUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="id"
                value={hire_employee_id}
                onChange={(e) => {
                  setHireEmployeeID(e.target.value)
                }}
              />
               <Button intent="success" onClick={addHireEmployee}>
                Hire Employee
              </Button>
               </td>
              <td>
               </td>
              <td>
               <InputGroup
                placeholder="username"
                value={fire_employee_username}
                onChange={(e) => {
                  setFireEmployeeUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="id"
                value={fire_employee_id}
                onChange={(e) => {
                  setFireEmployeeID(e.target.value)
                }}
              />
               <Button intent="success" onClick={addFireEmployee}>
                Fire Employee
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="username"
                value={manage_service_username}
                onChange={(e) => {
                  setManageServiceUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="id"
                value={manage_service_ID}
                onChange={(e) => {
                  setManageServiceID(e.target.value)
                }}
              />
               <Button intent="success" onClick={addManageService}>
                Manage Service
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="username"
                value={takeover_drone_username}
                onChange={(e) => {
                  setTakeoverUsername(e.target.value)
                }}
              />
               <InputGroup
                placeholder="id"
                value={takeover_drone_ID}
                onChange={(e) => {
                  setTakeoverID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={takeover_drone_tag}
                onChange={(e) => {
                  setTakeoverTag(e.target.value)
                }}
              />
               <Button intent="success" onClick={addTakeoverDrone}>
                Takeover Drone
              </Button>
               </td>
              <td>
               </td>
              <td>
               <InputGroup
                placeholder="id"
                value={join_swarm_id}
                onChange={(e) => {
                  setJoinSwarmID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={join_swarm_tag}
                onChange={(e) => {
                  setJoinSwarmTag(e.target.value)
                }}
              />
               <InputGroup
                placeholder="swarm_leader_tag"
                value={join_swarm_leader_tag}
                onChange={(e) => {
                  setJoinSwarmLeaderTag(e.target.value)
                }}
              />
               <Button intent="success" onClick={addJoinSwarm}>
                Join Swarm
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="id"
                value={leave_swarm_id}
                onChange={(e) => {
                  setLeaveSwarmID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={leave_swarm_tag}
                onChange={(e) => {
                  setLeaveSwarmTag(e.target.value)
                }}
              />
               <Button intent="success" onClick={addLeaveSwarm}>
                Leave Swarm
              </Button>

              <br>
              </br>
              <br>
              </br>

               <InputGroup
                placeholder="id"
                value={load_drone_id}
                onChange={(e) => {
                  setLoadDroneID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={load_drone_tag}
                onChange={(e) => {
                  setLoadDroneTag(e.target.value)
                }}
              />
               <InputGroup
                placeholder="barcode"
                value={load_drone_barcode}
                onChange={(e) => {
                  setLoadDroneBarcode(e.target.value)
                }}
              />
               <InputGroup
                placeholder="more_packages"
                value={load_drone_more_packages}
                onChange={(e) => {
                  setLoadDroneMorePackages(e.target.value)
                }}
              />
              <InputGroup
                placeholder="price"
                value={load_drone_price}
                onChange={(e) => {
                  setLoadDronePrice(e.target.value)
                }}
              />
               <Button intent="success" onClick={addLoadDrone}>
                Load Drone
              </Button>
               </td>
              <td>
               </td>
              <td>
               <InputGroup
                placeholder="id"
                value={refuel_drone_id}
                onChange={(e) => {
                  setRefuelDroneID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={refuel_drone_tag}
                onChange={(e) => {
                  setRefuelDroneTag(e.target.value)
                }}
              />
              <InputGroup
                placeholder="more_fuel"
                value={refuel_drone_more_fuel}
                onChange={(e) => {
                  setRefuelDroneMoreFuel(e.target.value)
                }}
              />
               <Button intent="success" onClick={addRefuelDrone}>
                Refuel Drone
              </Button>

              <br>
              </br>
              <br>
              </br>

              <InputGroup
                placeholder="departure"
                value={fuel_required_departure}
                onChange={(e) => {
                  setFuelRequiredDeparture(e.target.value)
                }}
              />
              <InputGroup
                placeholder="arrival"
                value={fuel_required_arrival}
                onChange={(e) => {
                  setFuelRequiredArrival(e.target.value)
                }}
              />
               <Button intent="success" onClick={addFuelRequired}>
                Add Required Fuel
              </Button>

              <br>
              </br>
              <br>
              </br>

              <InputGroup
                placeholder="id"
                value={fly_drone_id}
                onChange={(e) => {
                  setFlyDroneID(e.target.value)
                }}
              />
               <InputGroup
                placeholder="tag"
                value={fly_drone_tag}
                onChange={(e) => {
                  setFlyDroneTag(e.target.value)
                }}
              />
              <InputGroup
                placeholder="destination"
                value={fly_drone_destination}
                onChange={(e) => {
                  setFlyDroneDestination(e.target.value)
                }}
              />
               <Button intent="success" onClick={addFlyDrone}>
                Fly Drone
              </Button>
               </td>
              <td>
               </td>
              <td>

              <InputGroup
                placeholder="long_name"
                value={purchase_ing_long_name}
                onChange={(e) => {
                  setPurchaseIngLongName(e.target.value)
                }}
              />
              <InputGroup
                placeholder="id"
                value={purchase_ing_id}
                onChange={(e) => {
                  setPurchaseIngID(e.target.value)
                }}
              />
              <InputGroup
                placeholder="tag"
                value={purchase_ing_tag}
                onChange={(e) => {
                  setPurchaseIngTag(e.target.value)
                }}
              />
              <InputGroup
                placeholder="barcode"
                value={purchase_ing_barcode}
                onChange={(e) => {
                  setPurchaseIngBarcode(e.target.value)
                }}
              />
              <InputGroup
                placeholder="quantity"
                value={purchase_ing_quantity}
                onChange={(e) => {
                  setPurchaseIngQuantity(e.target.value)
                }}
              />
              <Button intent="success" onClick={addPurchaseIngredient}>
                Purchase Ingredient
              </Button>

              <br>
              </br>
              <br>
              </br>

              <InputGroup
                placeholder="barcode"
                value={remove_ing_barcode}
                onChange={(e) => {
                  setRemoveIngBarcode(e.target.value)
                }}
              />
              <Button intent="success" onClick={addRemoveIngredient}>
                Remove Ingredient
              </Button>

              <br>
              </br>
              <br>
              </br>

              <InputGroup
                placeholder="id"
                value={remove_drone_id}
                onChange={(e) => {
                  setRemoveDroneID(e.target.value)
                }}
              />
              <InputGroup
                placeholder="tag"
                value={remove_drone_tag}
                onChange={(e) => {
                  setRemoveDroneTag(e.target.value)
                }}
              />
              <Button intent="success" onClick={addRemoveDrone}>
                Remove Drone
              </Button>

              <br>
              </br>
              <br>
              </br>

              <InputGroup
                placeholder="username"
                value={remove_pilot_username}
                onChange={(e) => {
                  setRemovePilotUsername(e.target.value)
                }}
              />
              <Button intent="success" onClick={addRemovePilot}>
                Remove Pilot
              </Button>
              </td>
              <td>
               </td>
              <td>
              </td>
        <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>ingredient_name</th>
            <th>hover</th>
            <th>available_amount</th>
            <th>min_price</th>
            <th>max_price</th>
          </tr>
        </thead>
         <tbody>
          {ingredients.map((ingredient) => {
            const { ingredient_name, hover, amount_available, low_price, high_price  } = ingredient;
            return (
              <tr key={ingredient_name}>
                <td>{ingredient_name}</td>
                <td>{hover}</td>
                <td>{amount_available}</td>
                <td>{low_price}</td>
                <td>{high_price}</td>
                </tr>
            );
          })}

         </tbody>
        <tfoot>
          <tr>
            <td>
            </td>
           </tr>
        </tfoot>
      </table>
      <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>id</th>
            <th>long_name</th>
            <th>home_base</th>
            <th>manager</th>
            <th>revenue</th>
            <th>ingredients_carried</th>
            <th>cost_carried</th>
            <th>weight_carried</th>
          </tr>
        </thead>
        <tbody>
          {delivery_service.map((service) => {
            const { id, long_name, home_base, manager, revenue, ingredients_carried, cost_carried, weight_carried } = service;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{long_name}</td>
                <td>{home_base}</td>
                <td>{manager}</td>
                <td>{revenue}</td>
                <td>{ingredients_carried}</td>
                <td>{cost_carried}</td>
                <td>{weight_carried }</td>
                </tr>
            );
          })}
        </tbody>
        </table>
        <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>username</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>address</th>
            <th>num_restaurants</th>
            <th>num_locations</th>
            <th>highs</th>
            <th>lows</th>
            <th>debt</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner) => {
            const { username, first_name, last_name, address, num_restaurants, num_locations, highs, lows, debt } = owner;
            return (
              <tr key={username}>
                <td>{username}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>{address}</td>
                <td>{num_restaurants}</td>
                <td>{num_locations}</td>
                <td>{highs}</td>
                <td>{lows}</td>
                <td>{debt}</td>
                </tr>
            );
          })}
        </tbody>
        </table>

        {/* Employee */}
        <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>username</th>
            <th>taxID</th>
            <th>hired</th>
            <th>experience</th>
            <th>salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            const { username, taxID, hired, experience, salary} = employee;
            return (
              <tr key={username}>
                <td>{username}</td>
                <td>{taxID}</td>
                <td>{hired}</td>
                <td>{experience}</td>
                <td>{salary}</td>

                </tr>
            );
          })}
        </tbody>
        </table>

            {/* Pilot */}
        <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>username</th>
            <th>licenseID</th>
            <th>experience</th>
          </tr>
        </thead>
        <tbody>
          {pilots.map((pilot) => {
            const { username, licenseID, experience} = pilot;
            return (
              <tr key={username}>
                <td>{username}</td>
                <td>{licenseID}</td>
                <td>{experience}</td>
                </tr>
            );
          })}
        </tbody>
        </table>

             {/* Location */}
             <table className="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>label</th>
            <th>x_coord</th>
            <th>y_coord</th>
            <th>space</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => {
            const { label, x_coord, y_coord, space} = location;
            return (
              <tr key={label}>
                <td>{label}</td>
                <td>{x_coord}</td>
                <td>{y_coord}</td>
                <td>{space}</td>
                </tr>
            );
          })}
        </tbody>
        </table>



    </div>
  );
}
 export default App;
 // const removeIngredient = () => {
  //   // const name = newName.trim();
  //   // const department = newDepartment;
  //   // const address = newAddress.trim();
  //   // const barcode = barcode.trim();
  //   // if (name && department && address) {
  //   //   axios
  //   //     .post("http://localhost:3000/", {
  //   //       name,
  //   //       department,
  //   //       address,
  //   //     })
  //   //     .then((response) => {
  //   //       const { data } = response;
  //   //       setEmployees([...employees, data.result]);
  //   //       setNewName("");
  //   //       setNewAddress("");
  //   //       setNewDepartment("");
  //   //     });
  //   // }
  //   axios.delete(`http://localhost:3000/${barcode}`).then((response) => {
  //     setIngredients((values) => {
  //       console.log(barcode)
  //       return values.filter((item) => item.barcode !== barcode);
  //     }).then((response) => {
  //       setBarcode("");
  //     });
   //     AppToaster.show({
  //       message: "Ingredient deleted successfully",
  //       intent: "success",
  //       timeout: 3000,
  //     });
  //   });
  // };

