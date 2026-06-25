package com.cshbk.cshmint.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
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

    String securitySchemeName = "bearerAuth";

    return new OpenAPI()
            .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
          .components(new Components()
                   .addSecuritySchemes(securitySchemeName,
                            new SecurityScheme()
                                    .name(securitySchemeName)
                                    .type(SecurityScheme.Type.HTTP)
                                    .scheme("bearer")
                                    .bearerFormat("JWT")
                    )
            );
  }
}
