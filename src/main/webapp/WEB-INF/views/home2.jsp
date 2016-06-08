<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<%--<h1>Liferay Spring Portlet MVC</h1>--%>

<%--<p>HELLO WORLD333!!!</p>--%>

<%--<p>The time on the server is ${serverTime}.</p>--%>


<%--<p>Size is ${size}.</p>--%>


<%--<p>JSON : ${json}.</p>--%>

<%--String myVar2=${json};--%>


<%
	String myVar = (String) request.getAttribute("json");
%>
<%--<script type="text/javascript">--%>
<%--var value = '<c:out value="${json}"/>'--%>
<%--foo();--%>
<%--function foo() {--%>
<%--var viewModel = {--%>
<%--books: value--%>
<%--}--%>
<%--ko.applyBindings(viewModel);--%>
<%--}--%>
<%--foo();--%>
<%--function foo() {--%>
<%--var value = '<c:out value="${json}"/>';--%>
<%--alert(value);--%>
<%--&lt;%&ndash;}&ndash;%&gt;--%>
<%--</script>--%>

<%--<table border="1">--%>
	<%--<th>countryid</th>--%>
	<%--<th>Name</th>--%>
	<%--<th>a2</th>--%>
	<%--<th>a3</th>--%>
	<%--<th>number</th>--%>

	<%--<c:forEach var="listRef" items="${listRef}" varStatus="status">--%>
		<%--<tr>--%>
			<%--<td>${listRef.id}</td>--%>
			<%--<td>${listRef.name}</td>--%>
			<%--<td>${listRef.a2}</td>--%>
			<%--<td>${listRef.a3}</td>--%>
			<%--<td>${listRef.number}</td>--%>
		<%--</tr>--%>
	<%--</c:forEach>--%>
<%--</table>--%>

<%--var countries = new Array();--%>
<%--<c:forEach items="${listRef}" var="country" varStatus="status">--%>
<%--countryDetails = new Object();--%>
<%--countryDetails.country = ${country.id};--%>
<%--countryDetails.name = ${country.name};--%>
<%--countryDetails.a2 = ${country.a2};--%>
<%--countryDetails.a3 = ${country.a3};--%>
<%--countryDetails.number = ${country.number};--%>
<%--countries.push(countryDetails);--%>
<%--</c:forEach>--%>


<%--<p>OLOLO ${listRef}.</p>--%>

<%--<title>Configuring DataGrid</title>--%>
<%--<meta charset="utf-8"/>--%>
<%--<!--[if lt IE 9]>--%>
<%--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>--%>
<%--<![endif]-->--%>
<%--<!--[if gte IE 9]><!-->--%>
<%--<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>--%>
<%--<!--<![endif]-->--%>
<%--<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/knockout/3.4.0/knockout-min.js"></script>--%>
<%--<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/globalize/0.1.1/globalize.min.js"></script>--%>
<%--<script type="text/javascript" src="http://cdn3.devexpress.com/jslib/15.2.9/js/dx.webappjs.js"></script>--%>
<%--<link rel="stylesheet" type="text/css" href="http://cdn3.devexpress.com/jslib/15.2.9/css/dx.common.css"/>--%>
<%--<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/css/dx.light.css"/>--%>
<%--<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/globalize/0.1.1/globalize.min.js"></script>--%>
<%--<script type="text/javascript" src="<%=request.getContextPath()%>/js/grid.js"></script>--%>
<script type="text/javascript">
	<%--var value = '<c:out value="${json}"/>'--%>
	<%--foo();--%>
	<%--function foo() {--%>
	<%--alert(books);--%>
	<%--var books2 = <%=myVar%>;--%>
	<%--var viewModel = {--%>
	<%--books: books2--%>
	<%--}--%>
	<%--ko.applyBindings(viewModel);--%>
	<%--}--%>


	$(function () {
		var books2 = <%=myVar%>;
		var viewModel = {
			books: books2
		}
		ko.applyBindings(viewModel);
	});
	<%--&lt;%&ndash;foo();&ndash;%&gt;--%>
	<%--&lt;%&ndash;function foo() {&ndash;%&gt;--%>
	<%--&lt;%&ndash;var value = '<c:out value="${json}"/>';&ndash;%&gt;--%>
	<%--&lt;%&ndash;alert(value);&ndash;%&gt;--%>
	<%--&lt;%&ndash;}&ndash;%&gt;--%>
</script>
<%--<div style="height:420px; max-width:750px; margin: 0 auto" data-bind="dxDataGrid: {--%>
            <%--dataSource: books,--%>
            <%--columnChooser: { enabled: true },--%>
            <%--allowColumnReordering: true,--%>
            <%--sorting: { mode: 'multiple' },--%>
            <%--groupPanel: { visible: true, emptyPanelText: 'Drag a column header here to group grid records' },--%>
            <%--pager: { visible: true },--%>
            <%--paging: { pageSize: 7 },--%>
            <%--editing: {--%>
                <%--editEnabled: true,--%>
                <%--editMode: 'row',--%>
            <%--},--%>
            <%--filterRow: { visible: true },--%>
            <%--searchPanel: { visible: true },--%>
            <%--selection: { mode: 'none' }--%>
        <%--}">--%>
<%--</div>--%>

<body ng-app="gradis" ng-controller="Prototype" class="prototype">
<div data-options="dxLayout: { name:'default' }">
	<!-- Таблица с данными -->
	<div dx-button="deleteOptions" class="top-panel-button"></div>
	<div dx-button="addOptions" class="top-panel-button top-panel-add-button"></div>
	<div dx-data-grid="tableOptions" dx-dblclick="dblClickEventHandler($event)"></div>

	<!-- Окно с формой -->
	<div dx-popup="popupOptions">
		<div data-options="dxTemplate: { name:'info' }">
			<div dx-form="formOptions"></div>
			<div dx-button="cancelOptions"></div>
			<div dx-button="saveOptions"></div>
		</div>
	</div>
</div>
</body>
