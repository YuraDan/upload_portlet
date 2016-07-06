(function(){
    var //--- Настройки ---
        settings= {
            popup: {
                width: '50%',
                height: 'auto',
                contentTemplate: "info",
                showTitle: true,
                title: "Регистрация",
                dragEnabled: true,
                closeOnOutsideClick: false
            },
            form: {
                colCount: 2
            },
            cancel: {
                text: 'Отменить'
            },
            save: {
                //text: 'Сохранить'
                text: 'Зарегистрироваться'
            }
        },
        extend = angular.extend;

    angular.module('dataForm', [])
        .component('grDataForm', {
            transclude: false,
            templateUrl:'liferay-upload-portlet/html/simpleForm.html',
            require: {
                interfaceConnector: '^grInterfaceConnector'
            },
            controller:['$scope', '$element', function ($scope, $element) {
                var iDataForm;

                //--- Контекст ---
                extend($scope, {
                    settings: settings,
                    isShownPopup: false,
                    formData: {},
                    items: []
                });

                //--- Настройки ---
                extend(settings.popup, {
                    bindingOptions: {
                        visible: "isShownPopup"
                    },
                    onHidden: function(){
                        $scope.formData = {};
                    }
                });
                extend(settings.form, {
                    bindingOptions: {
                        formData: 'formData',
                        items: 'items'
                    }
                });
                extend(settings.cancel, {
                    onClick: function(e){
                        $scope.isShownPopup = false;
                        iDataForm.onCancel();
                    }
                });
                extend(settings.save, {
                    onClick: function(e){
                        $scope.isShownPopup = false;
                        iDataForm.onSave($scope.formData);
                    }
                });

                //--- Инициализация интерфейсов ---
                this.$onInit = function() {
                    var interfaceConnector = this.interfaceConnector;

                    //--- Редактирование данных ---
                    iDataForm = interfaceConnector.exportInterface('iDataForm',
                        {
                            //--- Передать данные ---
                            setData: function(importData){
                                var i,
                                    max,
                                    record,
                                    formData = {},
                                    items = [],
                                    itemSettings;

                                for(i = 0, max = importData.length; i < max; i++){
                                    record = importData[i];

                                    //--- Настройки атрибута ---
                                    itemSettings = {
                                        dataField: record.field,
                                        label: {
                                            text: record.label || ''
                                        }
                                    };
                                    switch(record.field){
                                        case 'name':
                                            itemSettings.editorType = 'dxTextBox';
                                            break;

                                        case 'organization':
                                            itemSettings.editorType = 'dxTextBox';
                                            break;

                                        case 'email':
                                            itemSettings.editorType = 'dxTextBox';
                                            itemSettings.editorOptions = {
                                                mode: 'email'
                                            };
                                            break;

                                        case 'telephone':
                                            itemSettings.editorType = 'dxTextBox';
                                            itemSettings.editorOptions = {
                                                mode: 'tel'
                                            };
                                            break;

                                        case 'pageId':
                                            itemSettings.visible = false;
                                            break;

                                        default:
                                            continue;
                                    }

                                    items.push(itemSettings);

                                    //--- Атрибут и его значение ---
                                    //formData[record.field] = record.value;
                                    record.value !== undefined && (formData[record.field] = record.value);
                                }

                                $scope.formData = formData;
                                $scope.items = items;

                                $scope.isShownPopup = true;
                            },
                            //--- Сохранение данных из формы ---
                            onSave: function(data){},
                            //--- Отмена ---
                            onCancel: function(data){}
                        }
                    );
                };
            }]
        });
}
)();