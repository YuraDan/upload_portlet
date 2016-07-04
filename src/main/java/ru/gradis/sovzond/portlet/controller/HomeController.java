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

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;
import java.util.Locale;

import com.liferay.portal.kernel.upload.UploadPortletRequest;
import com.liferay.portal.util.PortalUtil;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.portlet.bind.annotation.ActionMapping;
import org.springframework.web.portlet.bind.annotation.RenderMapping;
import org.apache.commons.io.FileUtils;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import org.springframework.web.servlet.ModelAndView;
import ru.gradis.sovzond.model.dao.ParcelDAO;
import ru.gradis.sovzond.model.dao.XmlAnalysisDAO;
import ru.gradis.sovzond.model.domain.FileVO;
import ru.gradis.sovzond.model.entity.Parcel;
import ru.gradis.sovzond.util.JsonBuilder;

import javax.portlet.ActionRequest;
import javax.portlet.ActionResponse;

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
	private XmlAnalysisDAO xmlAnalysisDAO;


	private final static int ONE_GB = 1073741824;

	private final static String baseDir = "/home/donchenko-y/tmp/";

	private final static String fileInputName = "fileupload";

//	@SuppressWarnings("SpringJavaAutowiringInspection")
//	@Autowired
//	private ReferenceDAO referenceDAO;

	private static final Log log = LogFactoryUtil.getLog(HomeController.class);

	@RenderMapping
	public ModelAndView home(Locale locale, ModelAndView model) throws IOException {


		log.info("Welcome home from portlet MVC! the client locale is " + locale.toString());

//		List<Parcel> parcels = parcelDAO.list();

//		model.addObject("parcels", JsonBuilder.getJsonStringFromList(parcels));
		model.setViewName("home");

		return model;
	}

	@ModelAttribute("fileVO")
	public FileVO getCommandObject() {
		System.out.println("SpringFileController -> getCommandObject -> Building VO");
		return new FileVO();
	}

	@ActionMapping
	public void upload(@ModelAttribute FileVO fileVO, ActionRequest request, ActionResponse response) {

		byte[] byteOfFile = new byte[0];

		UploadPortletRequest uploadRequest = PortalUtil.getUploadPortletRequest(request);

		long sizeInBytes = uploadRequest.getSize(fileInputName);

		if (uploadRequest.getSize(fileInputName) == 0) {
			System.out.println("Received file is 0 bytes!");
		}

		// Get the uploaded file as a file.
		File uploadedFile = uploadRequest.getFile(fileInputName);

		try {
			byteOfFile = fileToByte(uploadRequest.getFileAsStream(fileInputName));
		} catch (IOException e) {
			log.error(e);
			e.printStackTrace();
		}

		String sourceFileName = uploadRequest.getFileName(fileInputName);

//		FilenameUtils.getExtension(uploadedFile.toString());

		// Where should we store this file?
		File folder = new File(baseDir);

		// Check minimum 1GB storage space to save new files...

		if (folder.getUsableSpace() < ONE_GB) {
			System.out.println("Out of disk space!");
		}

		// This is our final file path.
		File filePath = new File(folder.getAbsolutePath() + File.separator + sourceFileName);

		String json = (String) xmlAnalysisDAO.executeAnalysis(byteOfFile, uploadedFile.getName(), FilenameUtils.getExtension(uploadedFile.toString()));
		fileVO.setMessage(json);

	}

	private byte[] fileToByte(InputStream inputStream) {
		try {
			return IOUtils.toByteArray(inputStream);
		} catch (IOException e) {
			e.printStackTrace();
			log.error(e);
		}
		return null;
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
