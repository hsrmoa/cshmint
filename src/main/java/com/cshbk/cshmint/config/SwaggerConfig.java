package com.cshbk.cshmint.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * ==========================================
 * Project : cshmint > API Swagger 설정
 * Created by 한소라 [ 2026. 4. 26. 오후 2:32 ]
 * Description :
 * ==========================================
 */
@Configuration
public class SwaggerConfig {

  @Bean
  public OpenAPI openAPI() {
    return new OpenAPI()
      .info(new Info()
              .title("CSH MINT API")
              .description("CSH MINT API 명세서")
              .version("v1.0.0")
      );
  }
}
