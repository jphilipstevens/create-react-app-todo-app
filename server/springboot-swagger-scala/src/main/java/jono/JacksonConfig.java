package jono;

import com.fasterxml.jackson.databind.Module;
import com.fasterxml.jackson.module.scala.DefaultScalaModule$;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JacksonConfig {

    @Bean
    public Module getScalaModule(){
        return DefaultScalaModule$.MODULE$;
    }
}