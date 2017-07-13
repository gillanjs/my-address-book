
Vue.component('record', {
    props: ['name', 'detail', 'organisation', 'options', 'selected', 'object'],
    data: function () {
        return {
            detailVisible: false,
            selectedlocal: {},
            modalVisible: false,
            editedName: this.name,
            editedPhone: this.detail.phone,
            editedStreetNameAndNo: this.detail.streetnameandno,
            editedCity: this.detail.city,
            editedPostcode: this.detail.postcode,
            noOrganisation: { 
                name: 'No Organisation', 
                detail: { 
                    phone: 'N/A', 
                    streetnameandno: 'N/A', 
                    city: 'N/A', 
                    postcode: 'N/A' }}
        };
    },
    //TODO remove <brs> in below template
    template:
        `<article class ="message" >

            <div class ="message-header">

                <a @click="expandDetail">{{name}} at {{organisation.name}}</a>

                <button @click="$emit('remove')" class ="delete "></button>

            </div>

            <div class ="message-body" v-show="detailVisible">

                Name: {{name}} <br>
                Organisation: {{organisation.name}} <br>
                Phone: {{detail.phone}} <br>
                No.& Street Name: {{detail.streetnameandno}} <br>
                City: {{detail.city}} <br>
                Postcode: {{detail.postcode}} <br>

                <button 
                    @click="editRecord" 
                    class="button">
                
                Edit Details
                
                </button>

                <br><br>

                Update Organisation:
                <select 
                    v-model="selectedlocal"
                    @change="$emit(
                        'selectedchanged',
                        selectedlocal,
                        object,
                        organisation)">

                    <option v-bind:value="noOrganisation">None</option>
                    <option v-for="option in options" v-bind:value="option">
                        {{ option.name }}
                    </option>
                </select>
            </div>

            <div class ="modal is-active" v-show="modalVisible">
                <div class ="modal-background">
                </div>
                <div class ="modal-card">

                    <header class ="modal-card-head">
                        <p class ="modal-card-title">Edit</p>
                        <button class ="delete" @click="editRecord"></button>
                    </header>

                    <section class ="modal-card-body">

                        Name:
                        
                        <input 
                            class ="input" 
                            v-model="editedName"
                            placeholder="Name*">

                        Phone:
                        
                        <input 
                            class ="input" 
                            v-model="editedPhone"
                            placeholder="Phone">

                        Street Name & No.:
                        
                        <input 
                            class ="input" 
                            v-model="editedStreetNameAndNo"
                            placeholder="Street Name & No.">

                        City: 
                        
                        <input 
                            class ="input" 
                            v-model="editedCity"
                            placeholder="City">

                        Postcode: 
                        
                        <input 
                            class ="input" 
                            v-model="editedPostcode"
                            placeholder="Postcode">

                    </section>

                    <footer class ="modal-card-foot">

                    <a class ="button is-success" @click="updateRecord">
                    
                    Save changes
                    
                    </a>

                    <a class ="button" @click="editRecord">Cancel</a>
                    </footer>
                </div>
            </div>
        </article>`,
    methods: {
        expandDetail: function () {
            this.detailVisible = !this.detailVisible;
        },
        editRecord: function () {
            this.editedName = this.name;
            this.editedPhone = this.detail.phone;
            this.editedStreetNameAndNo = this.detail.streetnameandno;
            this.editedCity = this.detail.city;
            this.editedPostcode = this.detail.postcode;
            this.modalVisible = !this.modalVisible;
        },
        updateRecord: function () {
            this.$emit(
                'update', 
                this.editedName, 
                this.editedPhone, 
                this.editedStreetNameAndNo, 
                this.editedCity, 
                this.editedPostcode, 
                this.object);
            this.editRecord();
        }

    }
});


Vue.component('organisationrecord', {
    props: ['name', 'detail', 'organisation', 'options', 'selected', 'object'],
    data: function () {
        return {
            detailVisible: false,
            selectedlocal: {},
            modalVisible: false,
            editedName: this.name,
            editedPhone: this.detail.phone,
            editedStreetNameAndNo: this.detail.streetnameandno,
            editedCity: this.detail.city,
            editedPostcode: this.detail.postcode,
            noOrganisation: { 
                name: 'No Organisation', 
                detail: { 
                    phone: 'N/A', 
                    streetnameandno: 'N/A', 
                    city: 'N/A',
                    postcode: 'N/A' }}
        };
    },
    template: `


            <article class ="message" >
            <div class ="message-header">
            <a @click="expandDetail">{{name}}</a>

                <button @click="$emit('remove')" class ="delete "></button>
            </div>
            <div class ="message-body" v-show="detailVisible">
            Name: {{name}} <br>
            Phone: {{detail.phone}} <br>
            No.& Street Name: {{detail.streetnameandno}} <br>
            City: {{detail.city}} <br>
            Postcode: {{detail.postcode}} <br>
            <button @click="editRecord" class ="button">Edit Details</button> <br><br>

            Person(s) at organisation:
            <br>
            <span v-for="staff in object.staff">{{staff.name}} <br> </span>
            </div>



            <div class ="modal is-active" v-show="modalVisible">
            <div class ="modal-background"></div>
            <div class ="modal-card">
            <header class ="modal-card-head">
            <p class ="modal-card-title">Edit</p>
            <button class ="delete" @click="editRecord"></button>
            </header>
            <section class ="modal-card-body">
            Name:<input class ="input" v-model="editedName"
             placeholder="Name*">
            Phone:<input class ="input" v-model="editedPhone"
             placeholder="Phone">
            Street Name & No.:<input class ="input" v-model="editedStreetNameAndNo"
             placeholder="Street Name & No.">
            City: <input class ="input" v-model="editedCity"
             placeholder="City">
             Postcode: <input class ="input" v-model="editedPostcode"
             placeholder="Postcode">
            </section>
            <footer class ="modal-card-foot">
            <a class ="button is-success" @click="updateRecord">Save changes</a>
            <a class ="button" @click="editRecord">Cancel</a>
            </footer>
            </div>
            </div>

        </article>

  `,
    methods: {
        expandDetail: function () {
            this.detailVisible = !this.detailVisible;
        },
        editRecord: function () {
            this.editedName = this.name;
            this.editedPhone = this.detail.phone;
            this.editedStreetNameAndNo = this.detail.streetnameandno;
            this.editedCity = this.detail.city;
            this.editedPostcode = this.detail.postcode;
            this.modalVisible = !this.modalVisible;
        },
        updateRecord: function () {
            this.$emit('update', this.editedName, this.editedPhone, this.editedStreetNameAndNo, this.editedCity, this.editedPostcode, this.object);
            this.editRecord();
        }

    }
});


new Vue({
    el: '#address-book-app',
    data: {
        name : '',
        phone: '',
        streetNameAndNo: '',
        city: '',
        postcode: '',
        nameOrg: '',
        phoneOrg: '',
        streetNameAndNoOrg: '',
        cityOrg: '',
        postcodeOrg: '',
        selected: '',
        createShow: false,
        createOrgShow: false,
        records: [/*
            { name: 'James Donaldson', detail: { phone: '00000 000 000', streetnameandno:'99 Default Street',city:'Edinburgh',postcode: 'AA99 9AA'}, organisation: {}},
            { name: 'Lucy Rogers', detail: { phone: '01000 000 000', streetnameandno: '98 Default Street', city: 'Edinburgh', postcode: 'BX99 9AA'}, organisation: {} },
            { name: 'James Jameson', detail: { phone: '02000 000 000', streetnameandno: '97 Default Street', city: 'Edinburgh', postcode: 'BB99 9AA'}, organisation: {} }*/
        ],
        organisations: [
           /* { name: 'Something Corp.', detail: { phone: '03000 000 000', streetnameandno: '99 Something Street', city: 'Edinburgh', postcode: 'KK99 9AA' }, staff: [] },
            { name: 'Default Inc.', detail: { phone: '04000 000 000', streetnameandno: '99 Other Street', city: 'Edinburgh', postcode: 'CC99 9AA' }, staff: [] }*/
        ]

        
    },
    mounted: function () {
        if (localStorage.getItem("savedPeople") === null) {
            //sets up default organisations immediately after page set up
            /*
            this.records[0].organisation = this.organisations[1];
            this.organisations[1].staff.push(this.records[0]);
            this.records[1].organisation = this.organisations[0];
            this.organisations[0].staff.push(this.records[1]);
            this.records[2].organisation = this.organisations[1];
            this.organisations[1].staff.push(this.records[2]);
            */
            this.saveRecords();
        }
        else {
            var savedRecords = localStorage.getItem("savedPeople");
            var savedPeople = JSON.parse(localStorage.getItem("savedPeople"));
            for (i = 0; i < savedPeople.length; i++) {
                this.records.push(savedPeople[i]);

                //alert(savedNoteArray[i].name);
            }
        }



    },
    methods: {
        createPerson: function () {
            if (this.name !== '') {
                this.records.push({ name: this.name, detail: { phone: this.phone, streetnameandno: this.streetNameAndNo, city: this.city, postcode: this.postcode }, organisation: {name: 'None'} });

                this.name = '';
                this.phone = '';
                this.streetNameAndNo = '';
                this.city = '';
                this.postcode = '';
                this.saveRecords();
            }

        },
        createOrganisation: function (){
            if (this.nameOrg !== '') {
                this.organisations.push({ name: this.nameOrg, detail: { phone: this.phoneOrg, streetnameandno: this.streetNameAndNoOrg, city: this.cityOrg, postcode: this.postcodeOrg }, staff:[]});

                this.nameOrg = '';
                this.phoneOrg = '';
                this.streetNameAndNoOrg = '';
                this.cityOrg = '';
                this.postcodeOrg = '';

            }
        },
        someMethod: function (arg,object,organisation) {
            //alert(arg.name + object.name);

            object.organisation = arg;
            var alreadyInArray = false;

            for (i = 0; i < arg.staff.length; i++) {
                if (arg.staff[i] === object) {
                    alreadyInArray = true;
                }
            }

            var indexAt = 0;
            for (i = 0; i < organisation.staff.length; i++) {
                if (organisation.staff[i] === object) {
                    indexAt = i;
                }
            }
            organisation.staff.splice(indexAt, 1);

            if (arg.name !== 'No Organisation' && !alreadyInArray) {
                
                arg.staff.push(object);
            }

        },
        updateRecord: function (newName, newPhone, newNoAndStreet, newCity, newPostcode, record) {
            record.name = newName;
            record.detail.phone = newPhone;
            record.detail.streetnameandno = newNoAndStreet;
            record.detail.city = newCity;
            record.detail.postcode = newPostcode;
        },
        toggleCreatePersonArea: function(){
            this.createShow = !this.createShow;
        },
        toggleCreateOrgArea: function () {
            this.createOrgShow = !this.createOrgShow;
        },
        saveRecords: function () {
            localStorage.removeItem("savedPeople");
            //localStorage.setItem("savedRecords", [this.records, this.organisations]);
            localStorage.setItem("savedPeople", JSON.stringify(this.records));
        }

    }
});
