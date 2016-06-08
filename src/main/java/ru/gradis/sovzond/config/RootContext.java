package ru.gradis.sovzond.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import ru.gradis.sovzond.dao.ParcelDAO;
import ru.gradis.sovzond.dao.ParcelDAOImpl;
import ru.gradis.sovzond.dao.ReferenceDAO;
import ru.gradis.sovzond.dao.ReferenceDAOImpl;

import javax.sql.DataSource;

/**
 * Created by donchenko-y on 6/1/16.
 */

@Configuration
@ComponentScan(basePackages = "ru.gradis.sovzond")
@EnableWebMvc
public class RootContext extends WebMvcConfigurerAdapter {


	@Bean
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("org.postgresql.Driver");
		dataSource.setUrl("jdbc:postgresql://localhost:5432/mo");
		dataSource.setUsername("iportal6");
		dataSource.setPassword("iportal66");

		return dataSource;
	}

	@Bean
	public ReferenceDAO getContactDAO() {
		return new ReferenceDAOImpl(getDataSource());
	}

	@Bean
	public ParcelDAO getParcelDAO() {
		return new ParcelDAOImpl(getDataSource());
	}
}
