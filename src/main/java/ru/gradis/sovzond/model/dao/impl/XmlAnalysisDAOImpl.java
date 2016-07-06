package ru.gradis.sovzond.model.dao.impl;

import com.liferay.portal.kernel.dao.orm.Type;
import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import org.springframework.jdbc.core.SqlOutParameter;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import ru.gradis.sovzond.jdbc.sql.SqlStorage;
import ru.gradis.sovzond.model.dao.XmlAnalysisDAO;
import ru.gradis.sovzond.util.JsonBuilder;

import javax.sql.DataSource;
import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;
import java.sql.Types;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by donchenko-y on 7/1/16.
 */
public class XmlAnalysisDAOImpl implements XmlAnalysisDAO {


	private static final Log log = LogFactoryUtil.getLog(JsonBuilder.class);

	private SimpleJdbcCall simpleJdbcCall;

	public XmlAnalysisDAOImpl(DataSource dataSource) {
		this.simpleJdbcCall = new SimpleJdbcCall(dataSource).withSchemaName("gkn").
				withProcedureName("pr_get_analysis_fast").
				declareParameters(
						new SqlParameter("i_body", Types.BINARY),
						new SqlParameter("i_name", Types.CLOB),
						new SqlParameter("i_extension", Types.CLOB)
				);
	}

	@Override
	public Object executeAnalysis(byte[] file, String name, String extension) {

		Map<String, Object> inParamMap = new HashMap<String, Object>();
		inParamMap.put("i_body", file);
		inParamMap.put("i_name", name);
		inParamMap.put("i_extension", extension);
		MapSqlParameterSource in = new MapSqlParameterSource().addValues(inParamMap);
		Map<String, Object> simpleJdbcCallResult = simpleJdbcCall.execute(in);
		System.out.println(simpleJdbcCallResult);
		log.info(simpleJdbcCallResult);

		String result = simpleJdbcCallResult.get("result_json").toString();
		System.out.println(result);
		return result;
	}

}
