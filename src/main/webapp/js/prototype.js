angular.module('gradis', ['dx'])
	.controller(
		'Prototype',
		function ($scope) {
			var customers = [
					{
						"ID": 1,
						"CompanyName": "Super Mart of the West",
						"Address": "702 SW 8th Street",
						"City": "Bentonville",
						"State": "Arkansas",
						"Zipcode": 72716,
						"Phone": "(800) 555-2797",
						"Fax": "(800) 555-2171",
						"Website": "http://www.nowebsitesupermart.com"
					},
					{
						"ID": 2,
						"CompanyName": "Electronics Depot",
						"Address": "2455 Paces Ferry Road NW",
						"City": "Atlanta",
						"State": "Georgia",
						"Zipcode": 30339,
						"Phone": "(800) 595-3232",
						"Fax": "(800) 595-3231",
						"Website": "http://www.nowebsitedepot.com"
					},
					{
						"ID": 3,
						"CompanyName": "K&S Music",
						"Address": "1000 Nicllet Mall",
						"City": "Minneapolis",
						"State": "Minnesota",
						"Zipcode": 55403,
						"Phone": "(612) 304-6073",
						"Fax": "(612) 304-6074",
						"Website": "http://www.nowebsitemusic.com"
					},
					{
						"ID": 4,
						"CompanyName": "Tom's Club",
						"Address": "999 Lake Drive",
						"City": "Issaquah",
						"State": "Washington",
						"Zipcode": 98027,
						"Phone": "(800) 955-2292",
						"Fax": "(800) 955-2293",
						"Website": "http://www.nowebsitetomsclub.com"
					},
					{
						"ID": 5,
						"CompanyName": "E-Mart",
						"Address": "3333 Beverly Rd",
						"City": "Hoffman Estates",
						"State": "Illinois",
						"Zipcode": 60179,
						"Phone": "(847) 286-2500",
						"Fax": "(847) 286-2501",
						"Website": "http://www.nowebsiteemart.com"
					},
					{
						"ID": 6,
						"CompanyName": "Walters",
						"Address": "200 Wilmot Rd",
						"City": "Deerfield",
						"State": "Illinois",
						"Zipcode": 60015,
						"Phone": "(847) 940-2500",
						"Fax": "(847) 940-2501",
						"Website": "http://www.nowebsitewalters.com"
					},
					{
						"ID": 7,
						"CompanyName": "StereoShack",
						"Address": "400 Commerce S",
						"City": "Fort Worth",
						"State": "Texas",
						"Zipcode": 76102,
						"Phone": "(817) 820-0741",
						"Fax": "(817) 820-0742",
						"Website": "http://www.nowebsiteshack.com"
					},
					{
						"ID": 8,
						"CompanyName": "Circuit Town",
						"Address": "2200 Kensington Court",
						"City": "Oak Brook",
						"State": "Illinois",
						"Zipcode": 60523,
						"Phone": "(800) 955-2929",
						"Fax": "(800) 955-9392",
						"Website": "http://www.nowebsitecircuittown.com"
					},
					{
						"ID": 9,
						"CompanyName": "Premier Buy",
						"Address": "7601 Penn Avenue South",
						"City": "Richfield",
						"State": "Minnesota",
						"Zipcode": 55423,
						"Phone": "(612) 291-1000",
						"Fax": "(612) 291-2001",
						"Website": "http://www.nowebsitepremierbuy.com"
					},
					{
						"ID": 10,
						"CompanyName": "ElectrixMax",
						"Address": "263 Shuman Blvd",
						"City": "Naperville",
						"State": "Illinois",
						"Zipcode": 60563,
						"Phone": "(630) 438-7800",
						"Fax": "(630) 438-7801",
						"Website": "http://www.nowebsiteelectrixmax.com"
					},
					{
						"ID": 11,
						"CompanyName": "Video Emporium",
						"Address": "1201 Elm Street",
						"City": "Dallas",
						"State": "Texas",
						"Zipcode": 75270,
						"Phone": "(214) 854-3000",
						"Fax": "(214) 854-3001",
						"Website": "http://www.nowebsitevideoemporium.com"
					},
					{
						"ID": 12,
						"CompanyName": "Screen Shop",
						"Address": "1000 Lowes Blvd",
						"City": "Mooresville",
						"State": "North Carolina",
						"Zipcode": 28117,
						"Phone": "(800) 445-6937",
						"Fax": "(800) 445-6938",
						"Website": "http://www.nowebsitescreenshop.com"
					},
					{
						"ID": 13,
						"CompanyName": "Braeburn",
						"Address": "1 Infinite Loop",
						"City": "Cupertino",
						"State": "California",
						"Zipcode": 95014,
						"Phone": "(408) 996-1010",
						"Fax": "(408) 996-1012",
						"Website": "http://www.nowebsitebraeburn.com"
					},
					{
						"ID": 14,
						"CompanyName": "PriceCo",
						"Address": "30 Hunter Lane",
						"City": "Camp Hill",
						"State": "Pennsylvania",
						"Zipcode": 17011,
						"Phone": "(717) 761-2633",
						"Fax": "(717) 761-2334",
						"Website": "http://www.nowebsitepriceco.com"
					},
					{
						"ID": 15,
						"CompanyName": "Ultimate Gadget",
						"Address": "1557 Watson Blvd",
						"City": "Warner Robbins",
						"State": "Georgia",
						"Zipcode": 31093,
						"Phone": "(995) 623-6785",
						"Fax": "(995) 623-6786",
						"Website": "http://www.nowebsiteultimategadget.com"
					},
					{
						"ID": 16,
						"CompanyName": "EZ Stop",
						"Address": "618 Michillinda Ave.",
						"City": "Arcadia",
						"State": "California",
						"Zipcode": 91007,
						"Phone": "(626) 265-8632",
						"Fax": "(626) 265-8633",
						"Website": "http://www.nowebsiteezstop.com"
					},
					{
						"ID": 17,
						"CompanyName": "Clicker",
						"Address": "1100 W. Artesia Blvd.",
						"City": "Compton",
						"State": "California",
						"Zipcode": 90220,
						"Phone": "(310) 884-9000",
						"Fax": "(310) 884-9001",
						"Website": "http://www.nowebsiteclicker.com"
					},
					{
						"ID": 18,
						"CompanyName": "Store of America",
						"Address": "2401 Utah Ave. South",
						"City": "Seattle",
						"State": "Washington",
						"Zipcode": 98134,
						"Phone": "(206) 447-1575",
						"Fax": "(206) 447-1576",
						"Website": "http://www.nowebsiteamerica.com"
					},
					{
						"ID": 19,
						"CompanyName": "Zone Toys",
						"Address": "1945 S Cienega Boulevard",
						"City": "Los Angeles",
						"State": "California",
						"Zipcode": 90034,
						"Phone": "(310) 237-5642",
						"Fax": "(310) 237-5643",
						"Website": "http://www.nowebsitezonetoys.com"
					},
					{
						"ID": 20,
						"CompanyName": "ACME",
						"Address": "2525 E El Segundo Blvd",
						"City": "El Segundo",
						"State": "California",
						"Zipcode": 90245,
						"Phone": "(310) 536-0611",
						"Fax": "(310) 536-0612",
						"Website": "http://www.nowebsiteacme.com"
					}
				],
				orders = [
					{
						"ID": 1,
						"OrderNumber": 35703,
						"OrderDate": "2014/04/10",
						"SaleAmount": 11800,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Los Angeles",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 4,
						"OrderNumber": 35711,
						"OrderDate": "2014/01/12",
						"SaleAmount": 16050,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "San Jose",
						"Employee": "Jim Packard"
					},
					{
						"ID": 5,
						"OrderNumber": 35714,
						"OrderDate": "2014/01/22",
						"SaleAmount": 14750,
						"Terms": "15 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 7,
						"OrderNumber": 35983,
						"OrderDate": "2014/02/07",
						"SaleAmount": 3725,
						"Terms": "15 Days",
						"CustomerStoreState": "Colorado",
						"CustomerStoreCity": "Denver",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 9,
						"OrderNumber": 36987,
						"OrderDate": "2014/03/11",
						"SaleAmount": 14200,
						"Terms": "15 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 11,
						"OrderNumber": 38466,
						"OrderDate": "2014/03/01",
						"SaleAmount": 7800,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Los Angeles",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 14,
						"OrderNumber": 39420,
						"OrderDate": "2014/02/15",
						"SaleAmount": 20500,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "San Jose",
						"Employee": "Jim Packard"
					},
					{
						"ID": 15,
						"OrderNumber": 39874,
						"OrderDate": "2014/02/04",
						"SaleAmount": 9050,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 18,
						"OrderNumber": 42847,
						"OrderDate": "2014/02/15",
						"SaleAmount": 20400,
						"Terms": "30 Days",
						"CustomerStoreState": "Wyoming",
						"CustomerStoreCity": "Casper",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 19,
						"OrderNumber": 43982,
						"OrderDate": "2014/05/29",
						"SaleAmount": 6050,
						"Terms": "30 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 29,
						"OrderNumber": 56272,
						"OrderDate": "2014/02/06",
						"SaleAmount": 15850,
						"Terms": "30 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 30,
						"OrderNumber": 57429,
						"OrderDate": "2014/05/16",
						"SaleAmount": 11050,
						"Terms": "30 Days",
						"CustomerStoreState": "Arizona",
						"CustomerStoreCity": "Phoenix",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 32,
						"OrderNumber": 58292,
						"OrderDate": "2014/05/13",
						"SaleAmount": 13500,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Los Angeles",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 36,
						"OrderNumber": 62427,
						"OrderDate": "2014/01/27",
						"SaleAmount": 23500,
						"Terms": "15 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 39,
						"OrderNumber": 65977,
						"OrderDate": "2014/02/05",
						"SaleAmount": 2550,
						"Terms": "15 Days",
						"CustomerStoreState": "Wyoming",
						"CustomerStoreCity": "Casper",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 40,
						"OrderNumber": 66947,
						"OrderDate": "2014/03/23",
						"SaleAmount": 3500,
						"Terms": "15 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 42,
						"OrderNumber": 68428,
						"OrderDate": "2014/04/10",
						"SaleAmount": 10500,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Los Angeles",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 43,
						"OrderNumber": 69477,
						"OrderDate": "2014/03/09",
						"SaleAmount": 14200,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Anaheim",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 46,
						"OrderNumber": 72947,
						"OrderDate": "2014/01/14",
						"SaleAmount": 13350,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 47,
						"OrderNumber": 73088,
						"OrderDate": "2014/03/25",
						"SaleAmount": 8600,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Reno",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 50,
						"OrderNumber": 76927,
						"OrderDate": "2014/04/27",
						"SaleAmount": 9800,
						"Terms": "30 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 51,
						"OrderNumber": 77297,
						"OrderDate": "2014/04/30",
						"SaleAmount": 10850,
						"Terms": "30 Days",
						"CustomerStoreState": "Arizona",
						"CustomerStoreCity": "Phoenix",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 56,
						"OrderNumber": 84744,
						"OrderDate": "2014/02/10",
						"SaleAmount": 4650,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 57,
						"OrderNumber": 85028,
						"OrderDate": "2014/05/17",
						"SaleAmount": 2575,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Reno",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 59,
						"OrderNumber": 87297,
						"OrderDate": "2014/04/21",
						"SaleAmount": 14200,
						"Terms": "30 Days",
						"CustomerStoreState": "Wyoming",
						"CustomerStoreCity": "Casper",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 60,
						"OrderNumber": 88027,
						"OrderDate": "2014/02/14",
						"SaleAmount": 13650,
						"Terms": "30 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 65,
						"OrderNumber": 94726,
						"OrderDate": "2014/05/22",
						"SaleAmount": 20500,
						"Terms": "15 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "San Jose",
						"Employee": "Jim Packard"
					},
					{
						"ID": 66,
						"OrderNumber": 95266,
						"OrderDate": "2014/03/10",
						"SaleAmount": 9050,
						"Terms": "15 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 69,
						"OrderNumber": 98477,
						"OrderDate": "2014/01/01",
						"SaleAmount": 23500,
						"Terms": "15 Days",
						"CustomerStoreState": "Wyoming",
						"CustomerStoreCity": "Casper",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 70,
						"OrderNumber": 99247,
						"OrderDate": "2014/02/08",
						"SaleAmount": 2100,
						"Terms": "15 Days",
						"CustomerStoreState": "Utah",
						"CustomerStoreCity": "Salt Lake City",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 78,
						"OrderNumber": 174884,
						"OrderDate": "2014/04/10",
						"SaleAmount": 7200,
						"Terms": "30 Days",
						"CustomerStoreState": "Colorado",
						"CustomerStoreCity": "Denver",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 81,
						"OrderNumber": 188877,
						"OrderDate": "2014/02/11",
						"SaleAmount": 8750,
						"Terms": "30 Days",
						"CustomerStoreState": "Arizona",
						"CustomerStoreCity": "Phoenix",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 82,
						"OrderNumber": 191883,
						"OrderDate": "2014/02/05",
						"SaleAmount": 9900,
						"Terms": "30 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Los Angeles",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 83,
						"OrderNumber": 192474,
						"OrderDate": "2014/01/21",
						"SaleAmount": 12800,
						"Terms": "30 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "Anaheim",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 84,
						"OrderNumber": 193847,
						"OrderDate": "2014/03/21",
						"SaleAmount": 14100,
						"Terms": "30 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "San Diego",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 85,
						"OrderNumber": 194877,
						"OrderDate": "2014/03/06",
						"SaleAmount": 4750,
						"Terms": "30 Days",
						"CustomerStoreState": "California",
						"CustomerStoreCity": "San Jose",
						"Employee": "Jim Packard"
					},
					{
						"ID": 86,
						"OrderNumber": 195746,
						"OrderDate": "2014/05/26",
						"SaleAmount": 9050,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Las Vegas",
						"Employee": "Harv Mudd"
					},
					{
						"ID": 87,
						"OrderNumber": 197474,
						"OrderDate": "2014/03/02",
						"SaleAmount": 6400,
						"Terms": "30 Days",
						"CustomerStoreState": "Nevada",
						"CustomerStoreCity": "Reno",
						"Employee": "Clark Morgan"
					},
					{
						"ID": 88,
						"OrderNumber": 198746,
						"OrderDate": "2014/05/09",
						"SaleAmount": 15700,
						"Terms": "30 Days",
						"CustomerStoreState": "Colorado",
						"CustomerStoreCity": "Denver",
						"Employee": "Todd Hoffman"
					},
					{
						"ID": 91,
						"OrderNumber": 214222,
						"OrderDate": "2014/02/08",
						"SaleAmount": 11050,
						"Terms": "30 Days",
						"CustomerStoreState": "Arizona",
						"CustomerStoreCity": "Phoenix",
						"Employee": "Clark Morgan"
					}
				],
				data = null,
				store,
				dataSource,
				table,
				columns = [],
				initColumn,
				setFormData,
				recordCount = orders.length,
				selectedItems,
				currentRow = null,
				addDocumentColumn,
				documentClick;

			//--- Данные ---
			store = new DevExpress.data.ArrayStore({
				data: window.parcels || orders,
				onLoaded: function () {
				}
			});

			//--- Источник данных ---
			dataSource = new DevExpress.data.DataSource({
				store: store
			});

			//--- Таблица ---
			$scope.tableOptions = {
				dataSource: dataSource,

				//--- Сортировка ---
				sorting: {
					mode: "single", // 'none' | 'single' | 'multiple'
					ascendingText: 'По возрастанию',
					descendingText: 'По убыванию',
					clearText: 'Отменить сортировку'
				},

				//--- Поиск ---
				searchPanel: {
					visible: true,
					width: 240,
					placeholder: "Найти...",
					highlightSearchText: true
				},

				//--- Фильтр ---
				filterRow: {
					visible: true,
					applyFilter: 'auto', // 'auto' | 'onClick'
					resetOperationText: 'Отменить фильтр',
					operationDescriptions: {
						'=': 'Равно',
						'<>': 'Не равно',
						'<': 'Меньше',
						'<=': 'Меньше или равно',
						'>': 'Больше than',
						'>=': 'Больше или равно',
						'startswith': 'Начинается',
						'contains': 'Содержит',
						'notcontains': 'Не содержит',
						'endswith': 'Заканчивается',
						'between': 'Диапазон'
					},
					betweenStartText: 'От',
					betweenEndText: 'До'
				},

				//--- Редактирование ---
				/*editing:{
				 mode:"form", //'row' | 'batch' | 'cell' | 'form'
				 allowAdding:true,
				 allowUpdating:false,
				 allowDeleting:false,
				 texts:{
				 addRow:'Добавить',
				 editRow:'Изменить',
				 deleteRow:'Удалить',
				 saveRowChanges:'Сохранить',
				 cancelRowChanges:'Отменить'
				 }
				 },*/

				//--- Выделение строк ---
				selection: {
					mode: 'multiple', //'none' | 'single' | 'multiple'
					showCheckBoxesMode: 'always'//'onClick' | 'onLongTap' | 'always' | 'none'
				},

				//--- Группировка по столбцам ---
				grouping: {
					autoExpandAll: true,
					groupContinuedMessage: 'Начало на предыдущей странице',
					groupContinuesMessage: 'Продолжение на следующей странице'
				},
				groupPanel: {
					visible: true,
					emptyPanelText: 'Для группировки по столбцу перетащите сюда его заголовок'
				},

				//--- Страницы ---
				scrolling: {
					mode: 'standard' // 'standard' || 'virtual' || 'infinite'
				},
				paging: {
					//--- Постраничная загрузка данных ---
					enabled: true,
					pageSize: 10,
					pageIndex: 0
				},
				pager: {
					//--- Размер страницы ---
					showPageSizeSelector: true,
					allowedPageSizes: [5, 10, 20],

					//--- Подпись ---
					showInfo: true,
					infoText: 'Страница {0} из {1} ({2} записей)',

					//--- Перемещение "Вперед" и "Назад" ---
					showNavigationButtons: true
				},

				//--- Экспорт ---
				'export': {
					enabled: true,
					allowExportSelectedData: true,
					excelFilterEnabled: true,
					excelWrapTextEnabled: true,
					fileName: 'Данные',
					texts: {
						excelFormat: 'Excel',
						exportTo: 'Экспорт в',
						exportToExcel: 'Экспорт в Excel',
						selectedRows: 'Выделенные строки'
					}
				},

				//--- Оформление ---
				showBorders: true, //Рамка таблицы
				rowAlternationEnabled: false, //Подсветка строк

				//--- Столбцы ---
				//columns:["CompanyName", "City", "State", "Phone", "Fax"]
				allowColumnReordering: true,
				allowColumnResizing: true,
				columnChooser: {
					enabled: true,
					title: 'Удаленные столбцы',
					emptyPanelText: 'Для удаления столбца из таблицы перетащите сюда его заголовок'
				},

				//--- Сохранение настроек ---
				stateStoring: {
					enabled: false,
					type: "localStorage",
					storageKey: "storage"
				},

				onCellPrepared: function (e) {
					if (e.rowType !== 'data' || e.column.cellTemplate !== 'documentCellTemplate') {
						return;
					}

					if (e.rowIndex % 2 === 0) {
						e.cellElement.addClass('document');
						e.cellElement.on('click', documentClick);
					}
					else {
						e.cellElement.empty();
					}
				},

				onRowClick: function (e) {
					data = e.rowType === 'data' ? e.data : null;

					if (e.rowType === 'data') {
						currentRow && currentRow.removeClass('current-row');
						currentRow = e.rowElement;
						currentRow.addClass('current-row');
					}
				},

				onSelectionChanged: function (data) {
					selectedItems = data.selectedRowsData;
					$scope.isSelectedRows = selectedItems.length !== 0;
				},

				onInitialized: function (e) {
					table = e.component;
				},
				onContentReady: function (e) {
					addDocumentColumn && addDocumentColumn();
				}
			};
			$scope.dblClickEventHandler = function (e) {
				//--- Снимаем выделение ---
				if (window.getSelection) {
					window.getSelection().removeAllRanges();
				} else { // старый IE
					document.selection.empty();
				}

				if (data !== null) {
					//--- Данные формы ---
					setFormData(data);

					$scope.isShownPopup = true;
				}
			};
			documentClick = function () {
				//--- Показать окно документа ---
				$scope.isShownDocumentPopup = true;
			};
			initColumn = function () {
				var columnCount,
					i;

				if (table === null) {
					return;
				}

				initColumn = null;

				for (i = 0, columnCount = table.columnCount(); i < columnCount; i++) {
					columns.push(table.columnOption(i));
				}
			};
			addDocumentColumn = function () {
				table.addColumn(
					{
						dataType: 'string',
						width: '50px',
						allowResizing: false,
						alignment: 'left',
						allowEditing: false,
						allowFiltering: false,
						caption: 'Док',
						visibility: true,
						cellTemplate: 'documentCellTemplate'
					}
				);
				table.refresh();
				addDocumentColumn = null;
			};

			//--- Окно ---
			$scope.isShownPopup = false;
			$scope.popupOptions = {
				width: '50%',
				height: 'auto',
				contentTemplate: "info",
				showTitle: true,
				title: "Атрибуты",
				dragEnabled: true,
				closeOnOutsideClick: false,
				bindingOptions: {
					visible: "isShownPopup"
				},
				onHidden: function () {
					//--- Очищение формы ---
					$scope.formData = {};
				}
			};

			//--- Окно queryBuilder ---
			$scope.isShownQueryPopup = false;
			$scope.queryPopupOptions = {
				shading: false,
				width: '734px',
				height: '470px',
				contentTemplate: "info",
				showTitle: true,
				title: "Расширенный фильтр запросов",
				dragEnabled: true,
				closeOnOutsideClick: false,
				bindingOptions: {
					visible: "isShownQueryPopup"
				},
				onShowing: function () {
					queryBuilderInit();
					queryBuilderInit = function () {
					};
				},
				onShown: function () {
					window.document.body.querySelector('#queryBuilderExample').style.visibility = 'visible';
				}
			};
			var queryBuilderInit = function () {
				var rules_widgets = {
					condition: 'OR',
					rules: [{
						id: 'date',
						operator: 'equal',
						value: '1991/11/17'
					}, {
						id: 'rate',
						operator: 'equal',
						value: 22
					}, {
						id: 'category',
						operator: 'equal',
						value: '38'
					}, {
						condition: 'AND',
						rules: [{
							id: 'coord',
							operator: 'equal',
							value: 'B.3'
						}]
					}]
				};

				$('#builder-widgets').empty();

// Fix for Selectize
				$('#builder-widgets').on('afterCreateRuleInput.queryBuilder', function (e, rule) {
					if (rule.filter.plugin == 'selectize') {
						rule.$el.find('.rule-value-container').css('min-width', '200px')
							.find('.selectize-control').removeClass('form-control');
					}
				});

				$('#builder-widgets').queryBuilder({
					plugins: ['bt-tooltip-errors'],

					filters: [{
						id: 'date',
						label: 'Datepicker',
						type: 'date',
						validation: {
							format: 'YYYY/MM/DD'
						},
						plugin: 'datepicker',
						plugin_config: {
							format: 'yyyy/mm/dd',
							todayBtn: 'linked',
							todayHighlight: true,
							autoclose: true
						}
					}, {
						id: 'rate',
						label: 'Slider',
						type: 'integer',
						validation: {
							min: 0,
							max: 100
						},
						plugin: 'slider',
						plugin_config: {
							min: 0,
							max: 100,
							value: 0
						},
						valueSetter: function (rule, value) {
							if (rule.operator.nb_inputs == 1) value = [value];
							rule.$el.find('.rule-value-container input').each(function (i) {
								$(this).slider('setValue', value[i] || 0);
							});
						},
						valueGetter: function (rule) {
							var value = [];
							rule.$el.find('.rule-value-container input').each(function () {
								value.push($(this).slider('getValue'));
							});
							return rule.operator.nb_inputs == 1 ? value[0] : value;
						}
					}, {
						id: 'category',
						label: 'Selectize',
						type: 'string',
						plugin: 'selectize',
						plugin_config: {
							valueField: 'id',
							labelField: 'name',
							searchField: 'name',
							sortField: 'name',
							create: true,
							maxItems: 1,
							plugins: ['remove_button'],
							onInitialize: function () {
								var that = this;

								if (localStorage.demoData === undefined) {
									$.getJSON(baseurl + '/assets/demo-data.json', function (data) {
										localStorage.demoData = JSON.stringify(data);
										data.forEach(function (item) {
											that.addOption(item);
										});
									});
								}
								else {
									JSON.parse(localStorage.demoData).forEach(function (item) {
										that.addOption(item);
									});
								}
							}
						},
						valueSetter: function (rule, value) {
							rule.$el.find('.rule-value-container input')[0].selectize.setValue(value);
						}
					}, {
						id: 'coord',
						label: 'Coordinates',
						type: 'string',
						validation: {
							format: /^[A-C]{1}.[1-6]{1}$/
						},
						input: function (rule, name) {
							var $container = rule.$el.find('.rule-value-container');

							$container.on('change', '[name=' + name + '_1]', function () {
								var h = '';

								switch ($(this).val()) {
									case 'A':
										h = '<option value="-1">-</option> <option value="1">1</option> <option value="2">2</option>';
										break;
									case 'B':
										h = '<option value="-1">-</option> <option value="3">3</option> <option value="4">4</option>';
										break;
									case 'C':
										h = '<option value="-1">-</option> <option value="5">5</option> <option value="6">6</option>';
										break;
								}

								$container.find('[name=' + name + '_2]').html(h).toggle(h != '');
							});

							return '\
      <select name="' + name + '_1"> \
        <option value="-1">-</option> \
        <option value="A">A</option> \
        <option value="B">B</option> \
        <option value="C">C</option> \
      </select> \
      <select name="' + name + '_2" style="display:none;"></select>';
						},
						valueGetter: function (rule) {
							return rule.$el.find('.rule-value-container [name$=_1]').val()
								+ '.' + rule.$el.find('.rule-value-container [name$=_2]').val();
						},
						valueSetter: function (rule, value) {
							if (rule.operator.nb_inputs > 0) {
								var val = value.split('.');

								rule.$el.find('.rule-value-container [name$=_1]').val(val[0]).trigger('change');
								rule.$el.find('.rule-value-container [name$=_2]').val(val[1]).trigger('change');
							}
						}
					}],

					rules: rules_widgets
				});

				/*$('#btn-reset').on('click', function() {
				 $('#builder-widgets').queryBuilder('reset');
				 });

				 $('#btn-set').on('click', function() {
				 $('#builder-widgets').queryBuilder('setRules', rules_widgets);
				 });

				 $('#btn-get').on('click', function() {
				 var result = $('#builder-widgets').queryBuilder('getRules');

				 if (!$.isEmptyObject(result)) {
				 alert(JSON.stringify(result, null, 2));
				 }
				 }); */
			};

			//--- Окно документа ---
			$scope.isShownDocumentPopup = false;
			$scope.documentPopupOptions = {
				shading: false,
				width: '500px',
				height: '200px',
				contentTemplate: "info",
				showTitle: true,
				title: "Документы",
				dragEnabled: true,
				closeOnOutsideClick: false,
				bindingOptions: {
					visible: "isShownDocumentPopup"
				}
			};

			//--- Форма ---
			$scope.formData = {};
			$scope.formOptions = {
				colCount: 2,
				bindingOptions: {
					formData: 'formData'
				},

				onContentReady: function (e) {
				},

				onInitialized: function (e) {
				}
			};
			setFormData = function (editData) {
				var formData,
					i,
					max,
					dataField;

				if (editData === undefined) {
					editData = {};
					data = null;
				}

				//--- Получение информации о столбцах ---
				initColumn && initColumn();

				//--- Данные для окна редактирования ---
				$scope.formData = formData = {};
				for (i = 0, max = columns.length; i < max; i++) {
					dataField = columns[i].dataField;
					formData[dataField] = editData[dataField] || '';
				}
			};

			//--- Кнопка "Фильтр запросов" ---
			$scope.queryOptions = {
				icon: 'liferay-spring-mvc-portlet/images/SVG/filtr.svg',
				hint: 'Расширенный фильтр запросов',
				onClick: function (e) {
					//--- Показать окно редактирования ---
					$scope.isShownQueryPopup = true;
				}
			};

			//--- Кнопка "Применить фильтр" ---
			$scope.applyFilterOptions = {
				text: 'Применить',
				onClick: function (e) {
					$scope.isShownQueryPopup = false;
				}
			};

			//--- Кнопка "Отменить фильтр" ---
			$scope.cancelFilterOptions = {
				text: 'Отменить',
				onClick: function (e) {
					$scope.isShownQueryPopup = false;
				}
			};

			//--- Кнопка "Добавить" ---
			$scope.addOptions = {
				icon: 'add',
				hint: 'Добавить',
				onClick: function (e) {
					//--- Получение информации о столбцах ---
					initColumn && initColumn();

					//--- Данные формы ---
					setFormData();

					//--- Показать окно редактирования ---
					$scope.isShownPopup = true;
				}
			};

			//--- Кнопка "Удалить" ---
			$scope.deleteOptions = {
				icon: 'remove',
				hint: 'Удалить',
				bindingOptions: {
					disabled: "!isSelectedRows"
				},
				onClick: function (e) {
					DevExpress.ui.dialog.confirm('Вы уверены, что хотите удалить ' +
						(selectedItems.length === 1 ? 'объект' : selectedItems.length + ' объекта(ов)') + '?',
						"Подтверждение удаления")
						.done(function (dialogResult) {
							if (!dialogResult) {
								return;
							}

							$.each(selectedItems, function () {
								store.remove(this);
							});
							table.refresh();
						});
				}
			};

			//--- Кнопка "Сохранить" ---
			$scope.saveOptions = {
				text: 'Сохранить',
				onClick: function (e) {
					var name,
						formData = $scope.formData;

					$scope.isShownPopup = false;

					//--- Добавление данных ---
					if (data === null) {
						store.insert(formData)
							.done(function (values, key) {
								//'values' contains the inserted item values
								//'key' contains the inserted item key
								var pageSize,
									temp;

								table.refresh();

								recordCount++;
								pageSize = table.pageSize();

								temp = Math.floor((recordCount - 1) / pageSize);
								table.pageIndex(temp);
							})
							.fail(function (error) {
								console.log(error);
								//handle error
							});
					}
					//--- Изменение данных ---
					else {
						for (name in formData) {
							data[name] = formData[name];
						}
					}
				}
			};

			//--- Кнопка "Отменить" ---
			$scope.cancelOptions = {
				text: 'Отменить',
				onClick: function (e) {
					$scope.isShownPopup = false;
				}
			};
		}
	);
