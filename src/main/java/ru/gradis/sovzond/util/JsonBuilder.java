package ru.gradis.sovzond.util;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;
import java.util.List;

/**
 * Created by donchenko-y on 6/9/16.
 */
public class JsonBuilder {

	private static final Log log = LogFactoryUtil.getLog(JsonBuilder.class);

	public static String getJsonStringFromList(List list) {
		ObjectMapper mapper = new ObjectMapper();
		try {
			return mapper.writeValueAsString(list);
		} catch (IOException e) {
			log.error(e);
			e.printStackTrace();
		}
		return null;
	}

}
