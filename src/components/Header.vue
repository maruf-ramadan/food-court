<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="default" style="position: fixed; background-color: #ffffff; max-width: 100%; width: 100%; z-index: 1000;">
            <b-navbar-brand href="/">FoodCourt</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav style="font-weight: bold;">
                    <b-nav-item href="#">Products</b-nav-item>
                    <b-nav-item href="#">About</b-nav-item>
                    <b-nav-item href="#">Blog</b-nav-item>
                </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-form-input size="sm" class="mr-sm-2" style="width: 200px;" placeholder="What do you want?"></b-form-input>
                    <el-button type="danger" size="small">Search</el-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Select Language" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ID</b-dropdown-item>
                </b-nav-item-dropdown>

                <!-- <b-nav-item-dropdown right>
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown> -->
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>


<script>
export default {
    name: 'Header',
    data () {
        return {
            text: 'Header',
            active: 'home'
        }
    }
}
</script>