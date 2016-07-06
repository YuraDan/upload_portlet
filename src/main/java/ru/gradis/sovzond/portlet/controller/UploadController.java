package ru.gradis.sovzond.portlet.controller;

import com.liferay.portal.kernel.log.Log;
import com.liferay.portal.kernel.log.LogFactoryUtil;
import com.liferay.portal.util.PortalUtil;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import ru.gradis.sovzond.model.dao.XmlAnalysisDAO;
import ru.gradis.sovzond.model.domain.FileVO;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.*;

import static org.apache.commons.io.FileUtils.ONE_GB;

/**
 * Created by donchenko-y on 6/30/16.
 */

@RestController
public class UploadController {

	@SuppressWarnings("SpringJavaAutowiringInspection")
	@Autowired
	private XmlAnalysisDAO xmlAnalysisDAO;

	private static final Log log = LogFactoryUtil.getLog(UploadController.class);

	@RequestMapping(value = "/services/upload", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	public
	@ResponseBody
	String handleFormUpload(@RequestParam("files[]") MultipartFile file, @ModelAttribute FileVO fileVO) {
		String json = "";

		if (!file.isEmpty()) {
			try {
				byte[] bytesOfFile = file.getBytes();
				json = (String) xmlAnalysisDAO.executeAnalysis(bytesOfFile, file.getName(), FilenameUtils.getExtension(file.toString()));
				fileVO.setMessage(json);
				log.info(json);
				return json;
			} catch (IOException e) {
				log.error(e);
			}
		}
		return "ERROR";
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

}
