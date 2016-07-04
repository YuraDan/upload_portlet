<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<portlet:defineObjects/>

<portlet:actionURL name="upload" var="uploadFileURL"></portlet:actionURL>

<aui:form action="<%= uploadFileURL %>" commandName="fileVO" enctype="multipart/form-data" method="post">

	<c:out value="${fileVO.message}"/>

	<aui:input type="file" name="fileupload"/>

	<aui:button name="Save" value="Analysis" type="submit"/>

</aui:form>


<%--<%@ page import="com.liferay.portal.kernel.util.GetterUtil" %>--%>
<%--<%@ page import="com.liferay.portal.kernel.util.StringPool" %>--%>
<%--<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>--%>
<%--<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>--%>
<%--<portlet:defineObjects/>--%>

<%--<%--%>
<%--boolean showLocationAddress_view = GetterUtil.getBoolean(portletPreferences.getValue("somePreferenceKey", StringPool.TRUE));--%>
<%--%>--%>

<%--<%--%>
<%--//	String myVar = (String) request.getAttribute("json");--%>
<%--String parcels = (String) request.getAttribute("parcels");--%>
<%--%>--%>

<%--<h2>GET PERIF : </h2><p>(<%= showLocationAddress_view %>)</p>--%>

<%--<script type="text/javascript">--%>
<%--&lt;%&ndash;var books2 = <%=myVar%>;&ndash;%&gt;--%>
<%--var parcels = <%=parcels%>;--%>
<%--</script>--%>

<%--<title>Record Paging</title>--%>
<%--<meta http-equiv="Content-Type" content="text/html; charset=utf-8">--%>
<%--<meta http-equiv="X-UA-Compatible" content="IE=edge">--%>

<%--<!-- Theme -->--%>
<%--<link href="<%=request.getContextPath()%>/css/dx.common.css" rel="stylesheet"/>--%>
<%--<link rel="dx-theme" data-theme="generic.light" href="<%=request.getContextPath()%>/css/dx.light.css"--%>
<%--data-active="true"/>--%>

<%--<link href="<%=request.getContextPath()%>/css/prototype.css" rel="stylesheet"/>--%>

<%--<!--[if lt IE 9]>--%>
<%--<script type="text/javascript" src="<%=request.getContextPath()%>/js/jquery-1.11.3.min.js"></script>--%>
<%--<![endif]-->--%>
<%--<!--[if gte IE 9]><!-->--%>
<%--<script src="<%=request.getContextPath()%>/js/jquery-2.1.4.min.js"></script>--%>
<%--<!--<![endif]-->--%>
<%--<script src="<%=request.getContextPath()%>/js/globalize.min.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/js/angular.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/js/angular-sanitize.min.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/js/dx.webappjs.js"></script>--%>
<%--<script src="<%=request.getContextPath()%>/js/jszip.min.js"></script>--%>

<%--<!-- Локализация -->--%>
<%--<script src="<%=request.getContextPath()%>/js/dx.webappjs.ru.js"></script>--%>

<%--<script src="<%=request.getContextPath()%>/js/prototype.js"></script>--%>

<%--<link href="https://netdna.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/assets/css/docs.min.css" rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/assets/css/style.css" rel="stylesheet">--%>
<%--<script src="https://netdna.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>--%>
<%--<script src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.3.0/bootbox.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/jQuery-QueryBuilder/dist/js/query-builder.standalone.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/assets/js/docs.min.js"></script>--%>


<%--<div ng-app="gradis" ng-controller="Prototype" class="prototype">--%>
<%--<div data-options="dxLayout: { name:'default' }">--%>
<%--<!-- Таблица с данными -->--%>
<%--<div dx-button="deleteOptions" class="top-panel-button"></div>--%>
<%--<div dx-button="addOptions" class="top-panel-button top-panel-add-button"></div>--%>
<%--<div dx-button="queryOptions" class="top-panel-button top-panel-query-button"></div>--%>
<%--<div dx-data-grid="tableOptions" dx-dblclick="dblClickEventHandler($event)">--%>
<%--<div data-options="dxTemplate:{ name:'documentCellTemplate' }">--%>
<%--<img src="<%=request.getContextPath()%>/images/SVG/document.svg">--%>
<%--</div>--%>
<%--</div>--%>

<%--<!-- Окно с формой -->--%>
<%--<div dx-popup="popupOptions">--%>
<%--<div data-options="dxTemplate: { name:'info' }">--%>
<%--<div dx-form="formOptions"></div>--%>
<%--<div dx-button="cancelOptions"></div>--%>
<%--<div dx-button="saveOptions"></div>--%>
<%--</div>--%>
<%--</div>--%>

<%--<!-- Окно с queryBuilder -->--%>
<%--<div dx-popup="queryPopupOptions">--%>
<%--<div data-options="dxTemplate: { name:'info' }">--%>
<%--<div id="queryBuilderExample" class="col-md-12 col-lg-10 col-lg-offset-1" style="visibility:hidden">--%>
<%--<div id="builder-widgets"></div>--%>
<%--<div dx-button="cancelFilterOptions"></div>--%>
<%--<div dx-button="applyFilterOptions"></div>--%>

<%--<!-- <div class="btn-group">--%>
<%--<button id="btn-reset" class="btn btn-warning reset" data-target="widgets">Reset</button>--%>
<%--<button id="btn-set" class="btn btn-success set-json" data-target="widgets">Set rules</button>--%>
<%--<button id="btn-get" class="btn btn-primary parse-json" data-target="widgets">Get rules</button>--%>
<%--</div>  -->--%>
<%--</div>--%>
<%--</div>--%>
<%--</div>--%>

<%--<!-- Окно документа -->--%>
<%--<div dx-popup="documentPopupOptions">--%>
<%--</div>--%>
<%--</div>--%>
<%--<link href="http://querybuilder.js.org/dist/bootstrap-datepicker/dist/css/bootstrap-datepicker3.min.css"--%>
<%--rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/dist/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css"--%>
<%--rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/dist/selectize/dist/css/selectize.bootstrap3.css" rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/dist/bootstrap-select/dist/css/bootstrap-select.min.css" rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/dist/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css"--%>
<%--rel="stylesheet">--%>
<%--<link href="http://querybuilder.js.org/dist/jQuery-QueryBuilder/dist/css/query-builder.default.min.css"--%>
<%--rel="stylesheet">--%>
<%--<script src="http://querybuilder.js.org/dist/moment/min/moment.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/selectize/dist/js/standalone/selectize.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/bootstrap-select/dist/js/bootstrap-select.min.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/jQuery-QueryBuilder/dist/js/query-builder.standalone.js"></script>--%>
<%--<script src="http://querybuilder.js.org/dist/sql-parser/browser/sql-parser.js"></script>--%>

<%--<script>var baseurl = 'http://querybuilder.js.org';</script>--%>
<%--<script src="http://querybuilder.js.org/assets/demo-widgets.js"></script>--%>
<%--<script src="http://querybuilder.js.org/assets/demo.js"></script>--%>
<%--</div>--%>
