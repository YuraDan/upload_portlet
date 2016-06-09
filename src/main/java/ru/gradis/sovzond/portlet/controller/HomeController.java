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
package ru.gradis.sovzond.portlet.controller;

import java.io.IOException;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import org.springframework.web.servlet.ModelAndView;
import ru.gradis.sovzond.model.dao.ParcelDAO;
import ru.gradis.sovzond.model.entity.Parcel;
import ru.gradis.sovzond.util.JsonBuilder;

/**
 * Handles requests for the view mode.
 */
@Controller
@RequestMapping("VIEW")
public class HomeController {

	@SuppressWarnings("SpringJavaAutowiringInspection")
	@Autowired
	private ParcelDAO parcelDAO;

//	@SuppressWarnings("SpringJavaAutowiringInspection")
//	@Autowired
//	private ReferenceDAO referenceDAO;

	private static final Log log = LogFactoryUtil.getLog(HomeController.class);

	@RenderMapping
	public ModelAndView home(Locale locale, ModelAndView model) throws IOException {


		log.info("Welcome home from portlet MVC! the client locale is " + locale.toString());

		List<Parcel> parcels = parcelDAO.list();

		model.addObject("parcels", JsonBuilder.getJsonStringFromList(parcels));
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
