import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const models = {
    state: {
        activities:[],
        ammunitions:[],
        ammunitiontypes:[],
        brands:[],
        calibers:[],
        coaches:[],
        equipments:[],
        guns:[],
        levels:[],
        salles:[],
        sizes:[],
        types:[],
        colors:[],
        configs:[],
        schedules:[],
        subscriptiontypes:[],
        file_upload:[],
        file_uploaded: [],
        uploaded_files: [],
    },
    getters: {
        activities: state => state.activities,
        ammunitions: state => state.ammunitions,
        ammunitiontypes: state => state.ammunitiontypes,
        brands: state => state.brands,
        calibers: state => state.calibers,
        coaches: state => state.coaches,
        equipments: state => state.equipments,
        guns: state => state.guns,
        levels: state => state.levels,
        salles: state => state.salles,
        sizes: state => state.sizes,
        types: state => state.types,
        colors: state => state.colors,
        configs: state => state.configs,
        schedules: state => state.schedules,
        subscriptiontypes: state => state.subscriptiontypes,
        file_upload: state => state.file_upload,
        file_uploaded: state => state.file_uploaded,
        uploaded_files: state => state.uploaded_files,
    },
    mutations: {
        file_upload(state, context) {
            if (context.hasOwnProperty("index")) {
                state.file_upload[context.index]["done"] = true;
            } else if (context == "reset") {
                state.file_upload = [];
                state.file_uploaded = [];
            } else state.file_upload.push(...context);
        },
        file_uploaded(state, context) {
            state.file_uploaded.push(context);
        },
        uploaded_files(state, context) {
            if (context == 'clear') state.uploaded_files = []
            else state.uploaded_files.push(context);
        },
        mutate(state, context) {
            if (context.state=='insert') {
                state[context.model].unshift(context.content)
            } else if (context.state=='update') {
                state[context.model].splice(state[context.model].findIndex( x => x.id == context.content.id),1,context.content)
            } else if (context.state=='remove') {
                context.content.forEach( content => {
                    state[context.model].splice(state[context.model].findIndex( x => x.id == content),1)
                })
            } else {
                state[context.model]=context.content
            }
        }
    }
}
const module = {
    state: {
        active_route_child: null,
        active_route_parent: null,
        active_route: null,
        toaster: [],
        query:[],
        updating:false,
        fetching:false,
        language: localStorage.getItem("language"),
        is_editing:false,
        is_show:false,
        create:'create',
        refresh:false,
        open_image:false,
    },
    getters: {
        active_route_child: state => state.active_route_child,
        active_route_parent: state => state.active_route_parent,
        active_route: state => state.active_route,
        toaster: state => state.toaster,
        updating: state => state.updating,
        fetching: state => state.fetching,
        query: state => state.query.map((param) => {
            return `${param.field}=${param.value}`
        }).join('&'),
        getLanguage: (state) =>state.language,
        is_editing: (state) =>state.is_editing,
        is_show: (state) =>state.is_show,
        create: (state) =>state.create,
        refresh: (state) =>state.refresh,
        open_image: (state) =>state.open_image,
    },
    mutations: {
        active_route_child(state, value) {
            state.active_route_child = value;
        },
        active_route_parent(state, value) {
            state.active_route_parent = value;
        },
        updating(state, value) {
            state.updating = value;
        },
        is_editing(state, value) {
            state.is_editing = value;
        },
        is_show(state, value) {
            state.is_show = value;
        },
        fetching(state, value) {
            state.fetching = value;
        },
        active_route(state, value) {
            state.active_route = value;
        },
        refresh(state, value) {
            state.refresh = value;
        },
        open_image(state, value) {
            state.open_image = value;
        },
        create(state, value) {
            state.create = value;
        },
        toaster(state, context) {
            if ("index" in context) {
                state.toaster.splice(context.index, 1);
            } else {
                state.toaster.unshift(context);
            }
        },
        
        SET_PARAMS(state, value = '') {
            let isParamsExist = false
    
            // reset query if route has changed
            if (value.reset) {
                state.query = [
                    { field:'page', value:1 }
                ]
                return
            }
    
            // remove key if page is remove key is true
            if (value.remove) {
                let index = state.query.findIndex(param => param.field == value.field)
                
                if (index > 0) {
                    state.query.splice(index, 1)
                }
                return
            }
    
            // check if params is already in query, then update
            state.query.forEach(param => {
                if (param.field == value.field) {
                    if (param.field == 'sortBy') { // these lines of codes are for table sort by functions
                        let originalVal = value.value.split('%')[0]
                        let sortParams = param.value.split(',')
                        let filterAscIndex = sortParams.indexOf(`${originalVal}%A`)
                        let filterDscIndex = sortParams.indexOf(`${originalVal}%D`)
    
                        if (filterAscIndex > - 1) sortParams.splice(filterAscIndex, 1)
                        if (filterDscIndex > - 1) sortParams.splice(filterDscIndex, 1)
    
                        param.value = sortParams.join(',')
    
                        if (value.value.split('%').length < 2) {
                            isParamsExist = true
                            return
                        }
                       
                        if (!param.value.split(',').includes(value.value)) {
                            param.value = `${param.value},${value.value}`
                        } else {
                            let sortParams = param.value.split(',')
                            let paramValIndex = sortParams.indexOf(value.value)
    
                            sortParams.splice(paramValIndex, 1)
                            param.value = sortParams.join(',')
                        }
                    } else {
                        param.value = value.value
                    }
                    isParamsExist = true
                }
            });
    
            if (value != '' && !isParamsExist) {
                state.query.push(value)
            }
        },
        setLanguage(state, language){
            state.language = language;
            localStorage.setItem("language", language);
        }
    },
};

export const store = new Vuex.Store({
    strict: true,
    modules: {
        module,
        models
    }
});