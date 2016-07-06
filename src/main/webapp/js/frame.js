(function () {
    var //--- Настройки ---
        settings = {},
        extend = angular.extend,
        onLoad = function(e){
            var $scope = e.data;

            $scope.isLoad = true;
        },
        onResize = function(e){
            var frame = e.data.frame,
                $scope = e.data.scope;

            $scope.frameWidth = frame.get(0).clientWidth - 16;
            $scope.params.height = $scope.frameWidth * 0.55;
            refresh($scope);
        },
        refresh = function($scope){
            var params = $scope.params;

            $scope.params = {};
            window.setTimeout(
                function() {
                    $scope.params = params;
                },
                100);
        };

    angular.module('frame', [])
        .filter('resourceUrl', ['$sce', function($sce){
            return function(url){
                return $sce.trustAsResourceUrl(url);
            };
        }])
        .filter('layerExtent', function(){
            return function(params, frameWidth){
                var bbox = params.bbox,
                    extentWidth,
                    extentHeight,
                    width,
                    height;

                if (bbox === undefined){
                    return params.url;
                }
                bbox = angular.fromJson(bbox);

                extentWidth = bbox.maxx - bbox.minx;
                extentHeight = bbox.maxy - bbox.miny;
                if (extentWidth <= 0 || extentHeight <= 0) {
                    return params.url;
                }

                //params.width = width = frameWidth - 100;
                //height = Math.ceil(width * (extentHeight / extentWidth));
                //params.height = height + 104 + 237;

                params.height = frameWidth * 0.55;

                return params.url +
                    '&bbox=' + bbox.minx + ',' + bbox.miny + ',' + bbox.maxx + ',' + bbox.maxy +
                    '&width=' + width +
                    '&height=' + height;
            };
        })
        .component('grFrame', {
            transclude: false,
            templateUrl: 'liferay-upload-portlet/html/frame.html',
            require:{
                interfaceConnector: '^grInterfaceConnector'
            },
            controller:['$scope', '$element', function ($scope, $element) {
                //--- Контекст ---
                extend($scope, {
                    settings: settings,
                    params: {},
                    isLoad: false,
                    frameWidth: 0,
                    height: 0
                });

                this.$postLink = function(){
                    var frame;

                    //--- Фрейм ---
                    if (frame = $element.find('.frame')){

                        //--- Фрейм загружен ---
                        frame.on('load', null, $scope, onLoad);

                        onResize({
                            data: {
                                frame: frame,
                                scope: $scope
                            }
                        });

                        //--- Изменение карты при изменении размеров окна ---
                        $(window).on('resize', null, {
                            frame: frame,
                            scope: $scope
                        }, function(){
                            $scope.frameWidth = frame.get(0).clientWidth - 16;
                            $scope.params.height = $scope.frameWidth * 0.55;

                        });
                    }
                };

                //--- Инициализация интерфейсов ---
                this.$onInit = function () {
                    var interfaceConnector = this.interfaceConnector;

                    //--- Отображение страницы во фрейме ---
                    interfaceConnector.exportInterface('iFrame',
                        {
                            //--- Установить URL, width, height для фрейма ---
                            set: function(params){
                                $scope.params = params;
                            },

                            refresh: function(){
                                refresh($scope);
                            }
                        }
                    );
                };
            }]
        });
})();