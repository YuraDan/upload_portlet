/*
 * This file is part of liferay-spring-mvc-portlet.
 *
 * liferay-spring-mvc-portlet is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or (at your option)
 * any later version.
 *
 * liferay-spring-mvc-portlet is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * liferay-spring-mvc-portlet. If not, see <http://www.gnu.org/licenses/>.
 */
package ru.gradis.sovzond.portlet;

import java.io.IOException;
import java.text.DateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import org.springframework.web.servlet.ModelAndView;
import ru.gradis.sovzond.dao.ParcelDAO;
import ru.gradis.sovzond.dao.ReferenceDAO;
import ru.gradis.sovzond.model.Parcel;
import ru.gradis.sovzond.model.Reference;

/**
 * Handles requests for the view mode.
 */
@Controller
@RequestMapping("VIEW")
public class HomeController {

	@SuppressWarnings("SpringJavaAutowiringInspection")
	@Autowired
	private ParcelDAO parcelDAO;

	@SuppressWarnings("SpringJavaAutowiringInspection")
	@Autowired
	private ReferenceDAO referenceDAO;

	private static final Log log = LogFactoryUtil.getLog(HomeController.class);

	@RenderMapping
	public ModelAndView home(Locale locale, ModelAndView model) throws IOException {
		ObjectMapper mapper = new ObjectMapper();


		log.info("Welcome home! the client locale is " + locale.toString());

		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);
//
//		model.addAttribute("serverTime", formattedDate);
//		model.add

		List<Reference> listRef = referenceDAO.list();
		List<Parcel> parcels = parcelDAO.list();

		List<Map<String, Object>> listRef2 = referenceDAO.selectAll();
		String size = String.valueOf(listRef.size());

		String json = mapper.writeValueAsString(listRef);

		String parelsJson = mapper.writeValueAsString(parcels);

		model.addObject("listRef", listRef);
		model.addObject("serverTime", formattedDate);
		model.addObject("size", size);
		model.addObject("json", json);
		model.addObject("getAll", listRef2);
		model.addObject("parcels", parelsJson);
		model.setViewName("home");

		return model;
	}


//	@RequestMapping(value = "/getAll", method = RequestMethod.GET)
//	public List<Map<String, Object>> getAll() {
//		return referenceDAO.selectAll();
//	}

//	@RequestMapping(value = "/getRef", method = RequestMethod.GET)
//	public List<Reference> listRef(ModelAndView model) throws IOException {
//		List<Reference> listRef = referenceDAO.list();
//		return listRef;
//	}


}
