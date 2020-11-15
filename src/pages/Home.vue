<template>
    <div style="margin-top: 0px; padding-bottom: 60px; background-color: #f8f9fa;">
        <b-container class="bv-example-row" style="padding-top: 100px; padding-bottom: 50px;">
            <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1">
                <b-col>
                    <img src="../assets/images/black-friday.jpg" style="max-width:100%; max-height:100%; object-fit: cover; width: 100%; height: 337px; border-radius: 20px;">
                </b-col>
                <b-col style="margin-top: 20px;">
                    <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="5">
                        <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="warning">Promo</el-button>
                        </b-col>
                        <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="primary">Pizza</el-button>
                        </b-col>
                        <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="success">Pasta</el-button>
                        </b-col>
                        <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="info">Donuts</el-button>
                        </b-col>
                        <!-- <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="warning">Beverage</el-button>
                        </b-col> -->
                        <b-col>
                            <el-button style="width: 100%; font-size: 18px; margin-top: 10px;" type="danger">Sandwich</el-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="margin-top: 40px;">
                <b-col>
                    <div>
                        <h4>Best Seller</h4>
                    </div>
                    <div>
                        <b-row cols="1" cols-sm="1" cols-md="4" cols-lg="3" style="margin-top: 20px;">
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/pizza.jpg" style="max-width:100%; max-height:100%; width: 100%; height: 250px; border-radius: 20px; object-fit: cover;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Pizza With Tomatoes ala Italia</h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2" @click="drawer = true">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/sandwich.jpg" style="max-width:100%; max-height:100%; object-fit: cover; width: 100%; height: 250px; border-radius: 20px;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Sandwich White Bread</h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/spaghetti.jpg" style="max-width:100%; max-height:100%; object-fit: cover; width: 100%; height: 250px; border-radius: 20px;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Plate Basil Cherry Gourmet</h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
            <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="margin-top: 40px;">
                <b-col>
                    <div>
                        <b-row cols="1" cols-sm="1" cols-md="4" cols-lg="3" style="margin-top: 20px;">
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/chicken.jpg" style="max-width:100%; max-height:100%; width: 100%; height: 250px; border-radius: 20px; object-fit: cover;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Crispy Fried Chicken </h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/fried-rice.jpg" style="max-width:100%; max-height:100%; object-fit: cover; width: 100%; height: 250px; border-radius: 20px;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Fried Rice with Tomatoes</h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col style="margin-top: 20px;">
                            <!-- <b-col style="margin-top: 20px; background-color: #ffffff; border-radius: 1rem; box-shadow: 0 2px 8px #ddd; padding: 20px;"> -->
                                <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1" style="max-width: 100%;">
                                    <b-col>
                                        <img src="../assets/images/sticky-rice-with-mango.jpg" style="max-width:100%; max-height:100%; object-fit: cover; width: 100%; height: 250px; border-radius: 20px;">
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h5>Sticky Rice with Mango</h5>
                                    </b-col>
                                    <b-col style="margin-top: 10px;">
                                        <h6 style="font-weight: bold;">IDR 130.000</h6>
                                    </b-col>
                                    <b-col style="font-weight: bold;">
                                        <b-row>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="danger" icon="el-icon-shopping-cart-2">Add to Cart</el-button>
                                            </b-col>
                                            <b-col>
                                                <el-button style="width: 100%; margin-top: 10px;" type="success" icon="el-icon-shopping-cart-2">Buy Now</el-button>
                                            </b-col>
                                        </b-row>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <el-drawer :size="drawer_size"
            title="I am the title"
            :visible.sync="drawer"
            :with-header="false">
            <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="1">
                <b-col>
                    <div style="background-color: #f9f9f9; padding: 20px;">Your Order</div>
                </b-col>
                <b-col style="margin-top: 30px;">
                    <div style="padding: 20px; text-align: center;">
                        <img src="../assets/images/pizza.jpg" style="max-width:65%; max-height:100%; width: 100%; height: 250px; border-radius: 20px; object-fit: cover;">
                    </div>
                </b-col>
                <b-col>
                    <div style="padding: 20px; text-align: center;">
                        <h5>Pizza With Tomatoes ala Italia</h5>
                    </div>
                </b-col>
                <b-col>
                    <div style="padding: 20px; text-align: center; margin-top: 40px;">
                        <el-input-number v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number>
                    </div>
                </b-col>
                <b-col>
                    <div style="padding: 20px; text-align: center; margin-top: 20px;">
                        <b-row>
                            <b-col>
                                <el-button style="width: 100%; margin-top: 0px;" type="warning" icon="el-icon-shopping-cart-2" @click="doAddToCart()" :loading="addToCart">Add to Cart</el-button>
                            </b-col>
                            <b-col>
                                <el-button style="width: 100%; margin-top: 0px;" type="primary" icon="el-icon-shopping-cart-2" @click="doBuy()">Buy Now</el-button>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </el-drawer>
        <el-dialog
            title="Order Form"
            :visible.sync="dialogOrder"
            width="30%"
            center>
            <b-row>
                <b-col>
                    <el-form ref="form" :model="form" label-width="120px">
                        <el-form-item label="Activity name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="Activity zone">
                            <el-select v-model="form.region" placeholder="please select your zone">
                            <el-option label="Zone one" value="shanghai"></el-option>
                            <el-option label="Zone two" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="Activity time">
                            <el-col :span="11">
                            <el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
                            </el-col>
                            <el-col class="line" :span="2">-</el-col>
                            <el-col :span="11">
                            <el-time-picker placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="Instant delivery">
                            <el-switch v-model="form.delivery"></el-switch>
                        </el-form-item>
                        <el-form-item label="Activity type">
                            <el-checkbox-group v-model="form.type">
                            <el-checkbox label="Online activities" name="type"></el-checkbox>
                            <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                            <el-checkbox label="Offline activities" name="type"></el-checkbox>
                            <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                            </el-checkbox-group>
                        </el-form-item>
                        <el-form-item label="Resources">
                            <el-radio-group v-model="form.resource">
                            <el-radio label="Sponsor"></el-radio>
                            <el-radio label="Venue"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="Activity form">
                            <el-input type="textarea" v-model="form.desc"></el-input>
                        </el-form-item>
                        <!-- <el-form-item>
                            <el-button type="primary" @click="onSubmit">Create</el-button>
                            <el-button>Cancel</el-button>
                        </el-form-item> -->
                    </el-form>
                </b-col>
            </b-row>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogOrder = false">Cancel</el-button>
                <el-button type="primary" @click="dialogOrder = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "Home",
    data () {
        return {
            drawer: false,
            drawer_size: '40%',
            num: 1,
            addToCart: false,
            dialogOrder: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
      doAddToCart(){
          this.addToCart = true
          this.drawer = false
          this.addToCart = false
      },
      doBuy(){
          this.dialogOrder = true
          this.drawer = false
      },
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style scoped>
.el-drawer__open .el-drawer.rtl {
    width: 50%;
    -webkit-animation: rtl-drawer-in .3s 1ms;
    animation: rtl-drawer-in .3s 1ms;
}

@media only screen and (max-width: 992px) {
    
}
</style>